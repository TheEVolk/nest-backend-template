import type { SelectQueryBuilder } from 'typeorm';
import type RepositoryGetListOptions from './repository-get-options.js';

export function applyRepositoryGetOptions(
  query: SelectQueryBuilder<unknown>,
  options: RepositoryGetListOptions,
) {
  const limit = Math.min(100, options.limit || 100);
  query.limit(limit);

  if (options.offset) {
    query.offset(options.offset);
  }
}
