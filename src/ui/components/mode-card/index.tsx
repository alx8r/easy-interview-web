'use client';

import { Card } from '@heroui/react';

export default function ModeCard() {
  return (
    <Card className="">
      <Card.Header>
        <Card.Title>Become an Acme Creator!</Card.Title>
        <Card.Description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
          followers.
        </Card.Description>
      </Card.Header>
      <Card.Footer>Creator Hub</Card.Footer>
    </Card>
  );
}
