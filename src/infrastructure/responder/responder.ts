import type ResponseWithItem from './responseWithItem.js';
import type ResponseWithItems from './responseWithItems.js';

export function successWithItems<T = unknown>(
  items: T[],
  total: number,
): ResponseWithItems<T> {
  return {
    isSuccess: true,
    items,
    total,
  };
}

export function successWithItem<T = unknown>(item: T): ResponseWithItem<T> {
  return {
    isSuccess: true,
    item,
  };
}
