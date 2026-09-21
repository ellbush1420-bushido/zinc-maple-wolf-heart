import { skillsFor, type Building, type Skill } from "@/lib/district";
import { cn } from "@/lib/utils";

type Props = {
  building: Building;
  highlight: string | "none";
  onSelect: (skill: Skill) => void;
};

export function BuildingPlate({ building, highlight, onSelect }: Props) {
  const floors = skillsFor(building.id);
  const n = floors.length;
  const topStart = 17;
  const span = 66;
  const h = span / n;

  return (
    <div className="relative mx-auto w-fit max-w-full overflow-hidden">
      <div className={cn("relative", building.id === "meta" && "plate-zoom")}>
      <img
        src={building.art}
        alt={`${building.name} wireframe`}
        className="block h-auto max-h-[min(28rem,calc(100dvh-13.5rem))] w-auto max-w-full"
      />
      {floors.map((floor, i) => {
        const hot = highlight === floor.id;
        const dim = highlight !== "none" && highlight !== floor.id;
        const inset = 22 + i * 0.7;
        return (
          <button
            key={floor.id}
            type="button"
            onClick={() => onSelect(floor)}
            aria-label={`${floor.code} ${floor.name}`}
            aria-pressed={hot}
            className={cn("floor-hotspot", hot && "is-hot", dim && "is-dim")}
            style={{
              top: `${topStart + i * h}%`,
              height: `${h}%`,
              left: `${inset}%`,
              right: `${inset}%`,
            }}
          />
        );
      })}
      </div>
    </div>
  );
}
