export interface User {
    name: string;
    lastName: string;
    age: number;
}

export interface PlanData {
    description: string;
    cost: string;
}

export interface UserData {
    type: string;
    document: string;
    celular: string;
    user: User;
}