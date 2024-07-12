import { createReducer } from '@reduxjs/toolkit';
import {
    toggleTransfersFilter,
    toggleAllTransfersFilter,
    sort,
    showMore,
} from './actions';
import { filterState, TRANSFERS } from '../constants/filters';
import { Ticket } from '../utils/Ticket';
import DataFactory, { PER_PAGE } from '../utils/DataFactory';
const arrayData = require('../constants/data.json');

type ticketsState = {
    data: Array<Ticket>;
    count: number;
};
interface state {
    filter: filterState;
    sort: string;
    tickets: ticketsState;
}

const initialState: state = {
    filter: { transfer: [] },
    sort: 'price',
    tickets: {
        data: new DataFactory(arrayData).sort('price').getData(PER_PAGE),
        count: new DataFactory(arrayData).sort('price').getCount(),
    },
};

const reducer = createReducer(initialState, (builder) => {
    // ФІЛЬТР
    builder
        .addCase(toggleTransfersFilter, (state, action) => {
            if (state.filter.transfer.includes(action.payload)) {
                const newValue = {
                    ...state.filter,
                    transfer: state.filter.transfer.filter(
                        (num) => num !== action.payload,
                    ),
                };

                const newData = new DataFactory(arrayData)
                    .sort(state.sort)
                    .filter(newValue);

                return {
                    ...state,
                    tickets: {
                        data: newData.getData(),
                        count: newData.getCount(),
                    },
                    filter: newValue,
                };
            } else {
                const newValue = {
                    ...state.filter,
                    transfer: [...state.filter.transfer, action.payload],
                };
                const newData = new DataFactory(arrayData)
                    .sort(state.sort)
                    .filter(newValue);
                return {
                    ...state,
                    tickets: {
                        data: newData.getData(),
                        count: newData.getCount(),
                    },
                    filter: newValue,
                };
            }
        })
        .addCase(toggleAllTransfersFilter, (state) => {
            const newValue = {
                ...state.filter,
                transfer: TRANSFERS.every(({ value }) =>
                    state.filter.transfer.includes(value),
                )
                    ? []
                    : TRANSFERS.map(({ value }) => value),
            };
            const newData = new DataFactory(arrayData)
                .sort(state.sort)
                .filter(newValue);
            return {
                ...state,
                tickets: {
                    data: newData.getData(),
                    count: newData.getCount(),
                },
                filter: newValue,
            };
        })
        // ФІЛЬТР
        // СОРТУВАННЯ
        .addCase(sort, (state, action) => {
            const newData = new DataFactory(arrayData)
                .sort(action.payload)
                .filter(state.filter);
            return {
                ...state,
                tickets: {
                    data: newData.getData(),
                    count: newData.getCount(),
                },
                sort: action.payload,
            };
        })
        // СОРТУВАННЯ
        // ПОКАЗАТИ БІЛЬШЕ
        .addCase(showMore, (state) => {
            const newLength = state.tickets.data.length + PER_PAGE;
            const newData = new DataFactory(arrayData)
                .sort(state.sort)
                .filter(state.filter);

            return {
                ...state,
                tickets: {
                    data: newData.getData(newLength),
                    count: newData.getCount(),
                },
            };
        });
    // ПОКАЗАТИ БІЛЬШЕ
});

export default reducer;
