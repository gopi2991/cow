export interface Cows{
    name: string;
    age: number;
    breed: string;
    milkProduction: number;
}

export interface Milk{
    id: number;
    cowName: string;
    morning: number;
    evening: number;
    price: string;
    total: number;
    revenue: number;
}