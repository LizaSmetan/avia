export interface Transfer {
    value: number;
    title: string;
}

export const TRANSFERS: Array<Transfer> = [
    { value: 0, title: 'Без пересадок' },
    { value: 1, title: '1 пересадка' },
    { value: 2, title: '2 пересадка' },
    { value: 3, title: '3 пересадка' },
];

type filter = {
    transfer: Array<Transfer>;
};

export type filterState = {
    transfer: Array<number>;
};
export const filters: filter = {
    transfer: TRANSFERS,
};
