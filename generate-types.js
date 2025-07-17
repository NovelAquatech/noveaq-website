const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure output directory exists
const typesDir = path.join(__dirname, 'src', 'types');
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
}

const contentDir = path.join(__dirname, 'content');
const files = fs.readdirSync(contentDir)
  .filter(file => file.endsWith('.json'));

if (files.length === 0) {
  console.error('❌ No JSON files found in content/');
  process.exit(1);
}

//delete everything in the types directory
fs.readdirSync(typesDir).forEach(file => {
  fs.unlinkSync(path.join(typesDir, file));
});
files.forEach(file => {
  const baseName = path.basename(file, '.json');
  const baseNameProcessed = baseName.replace(/-./g, match => match.charAt(1).toUpperCase());
  const outputPath = path.join(typesDir, `${baseName}.ts`);

  const command = `json-ts "./content/${file}" > "${outputPath}" --rootName "${baseNameProcessed}" --prefix ""`;
  console.log(`🔄 Generating: ${outputPath}`);
  execSync(command, { stdio: 'inherit' });
  
  // Add export statements to make the interfaces exportable
  const content = fs.readFileSync(outputPath, 'utf8');
  const exportedContent = content.replace(/^interface /gm, 'export interface ');
  fs.writeFileSync(outputPath, exportedContent);
});