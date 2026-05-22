'use client';

import { Avatar, Button, Card, Dropdown, Label, Surface } from '@heroui/react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Mode header to module folder */}
      <Surface
        className="min-w-[320px] flex justify-between items-center rounded-2xl p-4 mt-3"
        variant="default"
      >
        <h1 className="text-base font-semibold text-foreground">EasyQuestions</h1>
        <div className=''>
          <p>Sign Up</p>
          <p>Sign In</p>
        </div>
        <Dropdown>
          <Button isIconOnly variant="ghost">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
          </Button>

          <Dropdown.Popover className="mt-4" placement="bottom">
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" textValue="New file">
                <Label>Profile</Label>
              </Dropdown.Item>
              <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                <Label>Logout</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </Surface>
      <div>
        <div>
          <h3>Backend</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="w-[calc(20%-16px)] gap-2 flex flex-row items-center">
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
      </div>
    </div>
  );
}
