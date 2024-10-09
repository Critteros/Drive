'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useFormField } from './FormFieldContext';

export type FormMessageProps = ComponentProps<'p'>;

export function FormMessage({ className, children, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
}
