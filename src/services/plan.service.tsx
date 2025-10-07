import { API_URLS } from '../constants/apis';
import type { Plan } from '../types/Plan';

export async function fetchPlansApi(): Promise<Plan> {
  const response = await fetch(API_URLS.PLANS);

  if (!response.ok) {
    throw new Error('Error al obtener los planes');
  }

  const data: Plan = await response.json();
  return data;
}