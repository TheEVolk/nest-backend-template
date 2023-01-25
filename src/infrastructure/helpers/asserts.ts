import { NotFoundException } from '@nestjs/common';

export function assertItem<T = unknown>(item: T, name: string): T {
  if (!item) {
    throw new NotFoundException(name);
  }

  return item;
}
