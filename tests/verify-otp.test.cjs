const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const CryptoJS = require('crypto-js');

const source = fs.readFileSync(path.join(__dirname, '../src/pages/api/verify-otp.tsx'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
function invoke({ method = 'POST', body = { email: 'demo@example.test', otp: '123456', org: 'farming' }, storedOtp = '123456', env = {} } = {}) {
  const exports = {};
  let deleted = false;
  vm.runInNewContext(compiled, {
    exports,
    process: { env },
    require(name) {
      if (name === '@/lib/otpStore') return { getOtp: () => storedOtp, deleteOtp: () => { deleted = true; } };
      if (name === 'crypto-js') return CryptoJS;
      throw new Error('Unexpected import: ' + name);
    },
  });
  const response = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(value) { this.body = value; return this; }, end() { return this; } };
  exports.default({ method, body }, response);
  return { response, deleted };
}

test('demo handoff uses only configured server credentials and disables caching', () => {
  const { response, deleted } = invoke({ env: { DEMO_FARMING_PASSWORD: 'test-password-+/=' } });
  assert.equal(response.code, 200);
  assert.equal(response.headers['Cache-Control'], 'no-store');
  const url = new URL(response.body.redirectUrl);
  assert.equal(url.origin, 'https://portal.novelaquatech.com');
  assert.equal(Buffer.from(url.searchParams.get('p'), 'base64').toString(), 'test-password-+/=');
  assert.equal(deleted, true);
});
test('missing demo configuration fails closed without consuming the OTP', () => {
  const { response, deleted } = invoke();
  assert.equal(response.code, 503);
  assert.equal(deleted, false);
});
test('invalid OTP never yields a redirect', () => {
  const { response, deleted } = invoke({ storedOtp: 'different' });
  assert.equal(response.code, 401);
  assert.equal(response.body.redirectUrl, undefined);
  assert.equal(deleted, false);
});
test('unknown and prototype organisation keys are rejected', () => {
  for (const org of ['unknown', '__proto__', 'constructor']) {
    assert.equal(invoke({ body: { email: 'demo@example.test', otp: '123456', org } }).response.code, 400);
  }
});
test('non-demo destinations remain unchanged', () => {
  const { response } = invoke({ body: { email: 'demo@example.test', otp: '123456', org: 'camera' } });
  assert.equal(response.code, 200);
  assert.equal(response.body.redirectUrl, 'https://security.novelaquatech.com/');
});
