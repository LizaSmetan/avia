import React, { useMemo } from 'react';
import './Filter.scss';
import { Transfer, TRANSFERS } from '../../constants/filters';
import FilterItem from './FilterItem/FilterItem';
import { useFixedFilter } from './useFixedFilter';
import Dropdown from '../../elements/Dropdown/Dropdown';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleAllTransfersFilter,
    toggleTransfersFilter,
} from '../../store/actions';
import { FilterIcon } from '../../assets/SvgSprite';

const Filter: React.FC = () => {
    // Закріплення фільтра при скролі
    const filterRef = useFixedFilter();

    const dispatch: AppDispatch = useDispatch();

    const values = useSelector((state: RootState) => state.filter.transfer);

    const options = useMemo(() => {
        return [{ value: -1, title: 'Все' }, ...TRANSFERS].map((option) => {
            return {
                ...option,
                isChecked:
                    option.value === -1
                        ? TRANSFERS.every(({ value }) => values.includes(value))
                        : values.includes(option.value),
            };
        });
    }, [values]);

    const handler = (index: number) => {
        const { value } = options[index];
        if (value === -1) {
            dispatch(toggleAllTransfersFilter());
        } else {
            dispatch(toggleTransfersFilter(value));
        }
    };
    return (
        <>
            <div ref={filterRef} className="filter filter-desctop">
                <h6 className="filter__title">Кількість пересадок</h6>
                {options.map((transferValue: Transfer, i) => {
                    return (
                        <FilterItem
                            key={`FilterItem_${i}`}
                            handler={() => handler(i)}
                            transferValue={transferValue}
                        />
                    );
                })}
            </div>
            <div className="filter-mobile">
                <Dropdown
                    className="filter-mobile__button"
                    handler={handler}
                    options={options}
                    multiple={true}
                >
                    <FilterIcon />
                </Dropdown>
            </div>
        </>
    );
};
export default Filter;
