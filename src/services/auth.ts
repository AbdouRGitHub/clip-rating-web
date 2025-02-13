import { HTTPError } from 'ky';
import api from './index';

export async function login(
  email: string,
  password: string,
): Promise<{ success: boolean; message?: string }> {
  try {
    await api.post('auth/login', { json: { email, password } }).json();
    return { success: true };
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorJson = await error.response.json();
      console.error(errorJson);
      return { success: false, message: errorJson.message };
    } else {
      console.error(error);
      return { success: false, message: 'An error occurred' };
    }
  }
}
