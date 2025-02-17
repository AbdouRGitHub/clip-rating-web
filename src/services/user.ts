import { HTTPError } from 'ky';
import api from '.';
import type User from '@/models/user';

export async function profile(): Promise<User | null> {
  try {
    return await api.get('user/profile').json<User>();
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      return null;
    }
    return null;
  }
}
