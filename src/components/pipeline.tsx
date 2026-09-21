import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pipeline({
  steps,
  pulse,
}: {
  steps: string[];
  pulse: number | null;
}) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={cn(
              "border border-line px-3 py-2 text-2xs uppercase tracking-[0.16em] text-mute",
              pulse === i && "border-signal bg-signal text-bg",
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight className="size-3.5 text-signal" strokeWidth={1.5} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
