import React from 'react';
import './FilterItem.scss';
import { Transfer, TRANSFERS } from '../../../constants/filters';
import Checkbox from '../../../elements/Checkbox/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import {
    toggleAllTransfersFilter,
    toggleTransfersFilter,
} from '../../../store/actions';

const FilterItem = (props: Transfer) => {
    const dispatch: AppDispatch = useDispatch();
    const values = useSelector((state: RootState) => state.filter.transfer);
    const { value, title } = props;

    const isActive: boolean =
        value === -1
            ? TRANSFERS.every(({ value }) => values.includes(value))
            : values.includes(value);

    const onClick = () => {
        if (value === -1) {
            dispatch(toggleAllTransfersFilter());
        } else {
            dispatch(toggleTransfersFilter(value));
        }
    };

    return (
        <Checkbox
            className="filter-item"
            handler={onClick}
            isChecked={isActive}
            title={title}
        />
    );
};
export default FilterItem;
