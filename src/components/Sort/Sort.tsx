import React from 'react';
import { SORTS } from '../../constants/sorts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { sort } from '../../store/actions';
import './Sort.scss';
import Dropdown from '../../elements/Dropdown/Dropdown';
import { SortIcon } from '../../assets/SvgSprite';
import clsx from 'clsx';

const Sort: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const sortValue = useSelector((state: RootState) => state.sort);

    const isActiveIndex: number = SORTS.findIndex(
        (sort) => sort.value === sortValue,
    );

    const handler = (index: number) => {
        const { value } = SORTS[index];
        dispatch(sort(value));
    };

    const options = SORTS.map((opt) => ({
        ...opt,
        isChecked: sortValue === opt.value,
    }));
    return (
        <>
            <div className="sort sort-desctop">
                <div
                    className="sort__active_bg"
                    style={{
                        width: `calc(${100 / SORTS.length}% + (1px * 2))`,
                        left: `calc(${(100 / SORTS.length) * isActiveIndex}% - 1px)`,
                    }}
                ></div>
                {options.map(({ title }, i) => (
                    <button
                        className={clsx(
                            'sort__button',
                            isActiveIndex === i ? 'sort__button--active' : '',
                        )}
                        style={{
                            width: `${100 / SORTS.length}%`,
                        }}
                        key={`Sort_${i}`}
                        onClick={() => handler(i)}
                    >
                        <div className="sort__button_inner">{title}</div>
                    </button>
                ))}
            </div>
            <div className="sort-mobile">
                <Dropdown
                    className="sort-mobile__button"
                    handler={handler}
                    options={options}
                    align="left"
                >
                    <SortIcon />
                </Dropdown>
            </div>
        </>
    );
};
export default Sort;
