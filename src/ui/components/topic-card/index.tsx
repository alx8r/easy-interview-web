import { Card } from '@heroui/react';
import Image from 'next/image';

interface IProps {
  id: string;
  name: string;
  imgSrc: string;
  questionCount: string;
}

export default function TopicCard({ id, name, imgSrc, questionCount }: IProps) {
  return (
    <Card
      key={id}
      variant="default"
      className="w-[calc(20%-16px)] gap-2 flex flex-row items-center"
    >
      <Image
        alt={name}
        src={imgSrc}
        width={24}
        height={24}
        loading="lazy"
        className="pointer-events-none aspect-square w-auto rounded-2xl object-cover select-none"
      />
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{`${questionCount} questions`}</Card.Description>
      </Card.Header>
    </Card>
  );
}
