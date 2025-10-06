export interface Plan {
    list: PlanDetail[];
}

export interface PlanDetail {
    name: string;
    price: number;
    description: string[];
    age: number;
}
  