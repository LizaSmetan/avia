import { createAction } from '@reduxjs/toolkit';

export const toggleTransfersFilter = createAction<number>(
    'filter/toggleTransfer',
);
export const toggleAllTransfersFilter = createAction(
    'filter/toggleAllTransfer',
);
export const sort = createAction<string>('tickets/sort');
export const showMore = createAction('tickets/showMore');
