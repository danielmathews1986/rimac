import { API_URLS } from '../constants/apis';
import type { User } from '../types/User';

export async function fetchUsers(): Promise<User> {
  const response = await fetch(API_URLS.USERS);

  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }

  const data = await response.json();
  return data as User; 
}