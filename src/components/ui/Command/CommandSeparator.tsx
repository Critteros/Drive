'use client';

import type { ComponentProps } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/lib/utils';

export type CommandSeparatorProps = ComponentProps<typeof CommandPrimitive.Separator>;

export function CommandSeparator({ className, ...props }: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator className={cn('-mx-1 h-px bg-border', className)} {...props} />
  );
}
