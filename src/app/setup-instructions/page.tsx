import { getMarkdownBySlug, getPageBySlug } from "@/lib/api";
import MarkdownRender from "../_components/MarkdownRender";
import { readFile } from "fs/promises";
import path from "path";
import { SetupInstructions } from "@/types/setup-instructions";
import Navbar from "../_components/navbar/navbar";



export default async function SetupInstructionsPage() {
  const setupContent: SetupInstructions = getPageBySlug("setup-instructions.json");
  if (!setupContent) return null;
  const markdown = await getMarkdownBySlug(setupContent.file);
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/setup-instructions" />
      <section className="px-6 md:px-24 py-16 md:py-32 ">
        <div className="container mx-auto text-center">
          <MarkdownRender content={markdown} />
        </div>
      </section>
    </main>
  );
}
