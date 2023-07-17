'use client';

import { useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
type Props = {
  likes: number;
};
export default function LikesButton({ likes }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      className='transition-transform  hover:scale-125 hover:cursor-pointer disabled:text-gray-600'
      disabled={pending}
    >
      ❤️: {likes}
    </button>
  );
}
