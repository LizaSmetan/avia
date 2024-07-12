type price = {
    amount: number;
    currency: string;
};
export type segment = {
    from: string;
    to: string;
    departure: string;
    arrival: string;
    transfers: Array<string>;
};
export interface Ticket {
    id:number,
    price: price;
    company: string;
    way: Array<segment>;
}
