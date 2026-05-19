'use client';

import { ModeCard } from "@/src/ui/components";
import { MODES, ModeType } from "@/src/common/data/modes";



export default function ModeCards() {
  return (
    <div className="flex gap-5">
      {MODES.map((mode: ModeType) => (
        <ModeCard key={mode.id} />
      ))}
    </div>
  );
}
