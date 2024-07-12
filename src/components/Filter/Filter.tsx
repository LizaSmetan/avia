import React from 'react';
import './Filter.scss';
import { Transfer, TRANSFERS } from '../../constants/filters';
import FilterItem from './FilterItem/FilterItem';

const Filter: React.FC = () => {
    return (
        <div className="filter">
            <h6 className="filter__title">Кількість пересадок</h6>
            <FilterItem value={-1} title="Все" />
            {TRANSFERS.map((transferValue: Transfer, i) => {
                return (
                    <FilterItem key={`FilterItem_${i}`} {...transferValue} />
                );
            })}
        </div>
    );
};
export default Filter;
