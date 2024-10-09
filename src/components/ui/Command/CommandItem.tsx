'use client';

import type { ComponentProps } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/lib/utils';

export type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>;

export function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
