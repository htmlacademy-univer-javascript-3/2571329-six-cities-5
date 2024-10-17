export type City = 
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';

export type offerCard = {
    id: number;
    img: string;
    category?: string;
    price: number;
    rating: number;
    name: string;
    type: string;
    inMarks: boolean;
};