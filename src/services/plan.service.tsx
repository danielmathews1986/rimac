import { API_URLS } from '../constants/apis';

export async function fetchPlansApi(): Promise<any> {
  const response = await fetch(API_URLS.PLANS);

  if (!response.ok) {
    throw new Error('Error al obtener los planes');
  }

  const data = await response.json();
  return data; 
}