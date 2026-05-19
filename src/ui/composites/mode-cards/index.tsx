'use client';

import { ModeCard } from "@//ui/components";
import { MODES, ModeType } from "@//common/data/modes";



export default function ModeCards() {
  return (
    <div className="flex gap-5">
      {MODES.map((mode: ModeType) => (
        <ModeCard key={mode.id} />
      ))}
    </div>
  );
}
