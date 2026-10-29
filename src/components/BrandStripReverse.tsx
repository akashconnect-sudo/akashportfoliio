"use client";

const brands = ["AMAZON CONNECT", "AWS EC2", "NEXT.JS", "POSTGRESQL", "IVR · LAMBDA"];

export default function BrandStripReverse() {
  const names = [...brands, ...brands];
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 py-7">
      <div className="marquee-track-reverse">
        {names.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 text-xl font-bold tracking-tight text-cyan-400/50 sm:text-2xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
