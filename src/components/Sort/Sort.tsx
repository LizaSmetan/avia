import React from 'react';
import { SORTS } from '../../constants/sorts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { sort } from '../../store/actions';
import './Sort.scss';

const Sort: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const sortValue = useSelector((state: RootState) => state.sort);

    const isActiveIndex: number = SORTS.findIndex(
        (sort) => sort.value === sortValue,
    );

    return (
        <div className="sort">
            <div
                className="sort__active_bg"
                style={{
                    width: `calc(${100 / SORTS.length}% + (1px * 2))`,
                    left: `calc(${(100 / SORTS.length) * isActiveIndex}% - 1px)`,
                }}
            ></div>
            {SORTS.map(({ value, title }, i) => (
                <button
                    className={`sort__button ${isActiveIndex === i ? 'sort__button--active' : ''}`}
                    style={{
                        width: `${100 / SORTS.length}%`,
                    }}
                    key={`Sort_${i}`}
                    onClick={() => dispatch(sort(value))}
                >
                    <div className="sort__button_inner">{title}</div>
                </button>
            ))}
        </div>
    );
};
export default Sort;
