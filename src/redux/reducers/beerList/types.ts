export type IBeer = {
    id: number;
    name: string;
    tagline: string;
    description: string;
    abv: number;
    food_pairing: string[];
    image_url: string;
}


export type BeerState = {
    beers: IBeer[] | never,
    loading: boolean,
    status: Status,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SerchParams = {
    page: number
}