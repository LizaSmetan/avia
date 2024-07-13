import { filterState } from '../constants/filters';
import { flightTime } from './flightTime';
import { Segment, Ticket } from './Ticket';

export const PER_PAGE = 5;
class DataFactory {
    data: Array<Ticket>;
    constructor(data: Array<Ticket>) {
        this.sort = this.sort.bind(this);
        this.filter = this.filter.bind(this);
        this.getData = this.getData.bind(this);
        this.getCount = this.getCount.bind(this);

        this.data = data;
    }

    sort(sortValue: string) {
        const copy = [...this.data];

        switch (sortValue) {
            case 'price':
                copy.sort((a, b) => {
                    return a.price.amount - b.price.amount;
                });
                this.data = copy;
                return this;
            case 'speed':
                copy.sort((a, b) => {
                    return flightTime(a) - flightTime(b);
                });
                this.data = copy;
                return this;
            case 'optimal':
                copy.sort((a, b) => {
                    if (flightTime(a) !== flightTime(b)) {
                        return flightTime(a) - flightTime(b);
                    } else {
                        const getTransfersNum = (ticket: Ticket) =>
                            ticket.way.reduce(
                                (acc: number, segment: Segment) => {
                                    if (segment.transfers.length > acc) {
                                        return segment.transfers.length;
                                    }
                                    return acc;
                                },
                                0,
                            );
                        // Якщо часи однакові, сортуємо за кількістю пересадок
                        if (getTransfersNum(a) !== getTransfersNum(b)) {
                            return getTransfersNum(a) - getTransfersNum(b);
                        } else {
                            // Якщо і кількість пересадок однакова, сортуємо за ціною
                            return a.price.amount - b.price.amount;
                        }
                    }
                });
                this.data = copy;
                return this;
            default:
                this.data = copy;
                return this;
        }
    }
    filter(filterValue: filterState) {
        const copy = [...this.data];
        Object.keys(filterValue).forEach((filterKey) => {
            switch (filterKey) {
                case 'transfer':
                    const filterValues = filterValue[filterKey];
                    this.data = copy.filter((ticket: Ticket) =>
                        ticket.way.every((segment) =>
                            filterValues.includes(segment.transfers.length),
                        ),
                    );
            }
        });
        return this;
    }
    getData(perPage?: number) {
        const copy = [...this.data];
        return copy.slice(0, perPage || PER_PAGE);
    }
    getCount() {
        // Усього знайдено квитків
        return this.data.length;
    }
}
export default DataFactory;
