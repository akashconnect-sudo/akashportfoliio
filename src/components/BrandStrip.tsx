"use client";

const brands = ["PEXBIT MEDIA", "AR GROUP", "WOKORA FOODS", "NEXIORA AI", "SALES LEAD CRM"];

export default function BrandStrip() {
  const names = [...brands, ...brands];
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-zinc-950 py-7">
      <div className="marquee-track">
        {names.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 text-xl font-bold tracking-tight text-white/50 sm:text-2xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
