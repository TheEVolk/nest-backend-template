export default interface RepositoryGetListOptions {
  offset?: number;
  limit?: number;
  filter?: {
    [key: string]: string;
  };
}
