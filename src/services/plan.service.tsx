import { API_URLS } from '../constants/apis';
import type { PlanList } from '../types/Plan';

export async function fetchPlansApi(): Promise<PlanList[]> {
  const response = await fetch(API_URLS.PLANS);

  if (!response.ok) {
    throw new Error('Error al obtener los planes');
  }

  const data = await response.json();
  return data as PlanList[]; 
}