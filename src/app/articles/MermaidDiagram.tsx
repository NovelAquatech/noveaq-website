'use client';

import { useEffect, useId, useState } from 'react';

// Mermaid uses shared DOM state while rendering. Queue diagrams so multiple charts
// on the same article page do not race one another.
let renderQueue: Promise<void> = Promise.resolve();
let mermaidModule: Promise<typeof import('mermaid')> | undefined;

function getMermaid() {
  mermaidModule ??= import('mermaid').then((module) => {
    module.default.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'neutral' });
    return module;
  });
  return mermaidModule;
}

export default function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [svg, setSvg] = useState<string>();
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    renderQueue = renderQueue.catch(() => {}).then(async () => {
      if (cancelled) return;
      try {
        const mermaid = await getMermaid();
        if (cancelled) return;
        const result = await mermaid.default.render(`article-diagram-${id}`, chart);
        if (!cancelled) setSvg(result.svg);
      } catch (cause) {
        console.error('Could not render article diagram', cause);
        if (!cancelled) setError(true);
      }
    });
    return () => { cancelled = true; };
  }, [chart, id]);

  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-blue-100 bg-blue-50/40 p-5 shadow-sm md:p-8 [&_svg]:mx-auto [&_svg]:max-w-full">
      {svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : (
        <>
          {error && <p className="text-sm text-red-700">Diagram unavailable; source shown below.</p>}
          <pre className="overflow-x-auto text-sm">{chart}</pre>
        </>
      )}
    </div>
  );
}
