'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
export default function SendCommentButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className='mx-2 rounded bg-zinc-700 px-3 py-1 text-white disabled:cursor-not-allowed disabled:bg-gray-400'
      disabled={pending}
    >
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  );
}
