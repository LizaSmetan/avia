export interface Sort {
    value: string;
    title: string;
}

export const SORTS: Array<Sort> = [
    { value: 'price', title: 'Найдешевший' },
    { value: 'speed', title: 'Найшвидший' },
    { value: 'optimal', title: 'Оптимальний' },
];
