import React from 'react';
import './FilterItem.scss';
import Checkbox from '../../../elements/Checkbox/Checkbox';
import { option } from '../../../elements/Dropdown/Dropdown';

type Props = { transferValue: option; handler: () => void };

const FilterItem = (props: Props) => {
    const { transferValue, handler } = props;
    const { title, isChecked } = transferValue;

    const onClick = () => {
        handler();
    };

    return (
        <Checkbox
            className="filter-item"
            handler={onClick}
            isChecked={Boolean(isChecked)}
            title={title}
        />
    );
};
export default FilterItem;
