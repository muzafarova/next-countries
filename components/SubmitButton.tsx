import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  children,
  ...attrs
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} {...attrs}>
      {pending ? 'Loading...' : children}
    </button>
  );
}
