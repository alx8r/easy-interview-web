import { Chip, Surface } from '@heroui/react';
import { SectionsResponseDto } from '@/redux/stores/sections/dtos';
import { TopicCard } from '@/ui/components';

interface IProps {
  section: SectionsResponseDto;
}

export default function SectionSurface({ section }: IProps) {
  return (
    <Surface
      key={section.id}
      className="flex min-w-[320px] flex-col gap-3 rounded-3xl mt-4 p-6"
      variant="secondary"
    >
      <div className="flex">
        <Chip size={'lg'} variant={'soft'} color={'accent'}>
          <Chip.Label className="font-bold">{section.name}</Chip.Label>
        </Chip>
      </div>
      <div className="mt-2 flex flex-wrap gap-4">
        {!!section.topics &&
          section.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}
              name={topic.name}
              imgSrc={topic.image}
              questionCount={'???'}
            />
          ))}
      </div>
    </Surface>
  );
}
