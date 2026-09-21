import { cn } from "@/lib/utils";
import { PSYCHE } from "@/lib/district";

type Size = "city" | "bay";

export function MiniHydraFigure({
  slots,
  running,
  serial,
  size = "bay",
}: {
  slots: (string | null)[];
  running?: boolean;
  serial: number;
  size?: Size;
}) {
  const lit = slots.filter(Boolean).length;
  return (
    <div className={cn("relative mx-auto shrink-0", size === "city" ? "w-24" : "w-36")}>
      <img
        src="/art/mini-hydra.jpg"
        alt="Mini Hydra Zeta chassis"
        className={cn(
          "mx-auto w-full object-contain",
          size === "city" ? "max-h-24" : "max-h-36",
          running && "hydra-run",
        )}
      />
      <div className="mt-2 flex justify-center gap-1">
        {PSYCHE.map((p, i) => (
          <span
            key={p.id}
            title={p.name}
            className={cn(
              "size-1.5",
              slots[i] ? "bg-signal" : "border border-line bg-transparent",
            )}
          />
        ))}
      </div>
      <p className="mt-1 text-center font-mono text-2xs tabular-nums uppercase tracking-[0.16em] text-mute">
        Z-{String(serial).padStart(2, "0")} · {lit}/3
      </p>
    </div>
  );
}
