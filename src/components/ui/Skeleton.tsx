import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SkeletonProps = ComponentProps<'div'>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />;
}
