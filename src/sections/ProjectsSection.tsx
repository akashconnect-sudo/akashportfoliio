"use client";

import React from "react";
import ProjectsScrollCards from "./ProjectsScrollCards";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-28 overflow-hidden bg-zinc-950 px-4 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div className="relative z-10">
        <ProjectsScrollCards />
      </div>
    </section>
  );
}
