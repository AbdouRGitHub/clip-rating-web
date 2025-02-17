import type User from './user';

export default interface Playlist {
  id: string;
  name?: string;
  description?: string;
  user: User;
}
