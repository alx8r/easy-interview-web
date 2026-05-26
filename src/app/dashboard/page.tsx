'use client';

import { Card, Chip, Surface } from '@heroui/react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl mt-4 p-6" variant="secondary">
        <div className="flex">
          <Chip size={'lg'} variant={'soft'} color={'accent'}>
            <Chip.Label className="font-bold">Backend</Chip.Label>
          </Chip>
        </div>
        <div className="mt-2 flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} variant='default' className="w-[calc(20%-16px)] gap-2 flex flex-row items-center">
              <img
                alt="Indie Hackers community"
                className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                loading="lazy"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
              />
              <Card.Header>
                <Card.Title>Node.js</Card.Title>
                <Card.Description>148 questions</Card.Description>
              </Card.Header>
            </Card>
          ))}
        </div>
      </Surface>

      {/* <div>
        <div>
          <Chip>Label text</Chip>
          <div >

          </div>
        </div>
        <div>
          <h3>Frontend</h3>
          <div className="mt-4 flex gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="w-full gap-2 flex flex-row items-center">
                <img
                  alt="Indie Hackers community"
                  className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                  loading="lazy"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                />
                <Card.Header>
                  <Card.Title>React</Card.Title>
                  <Card.Description>100 questions</Card.Description>
                </Card.Header>
              </Card>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
