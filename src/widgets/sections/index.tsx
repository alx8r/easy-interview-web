'use client';

import { sectionsService } from '@/redux/stores/sections';
import { SectionSurface } from '@/ui/composites';

export default function SectionsWidget() {
  const { data: sections } = sectionsService.useFindManySectionsQuery();

  return (
    <div className="min-h-screen flex flex-col">
      {!!sections &&
        sections.map((section) => <SectionSurface key={section.id} section={section} />)}
    </div>
  );
}
