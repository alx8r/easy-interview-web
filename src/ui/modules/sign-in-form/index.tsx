'use client';

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';


export default function SignInForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.currentTarget);
  };


  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <TextField name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField name="password" type="password">
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <FieldError />
      </TextField>
      <div className="flex gap-2 justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
