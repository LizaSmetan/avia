import React from 'react';
import './Checkbox.scss';
import { CheckIcon } from '../../assets/SvgSprite';
import clsx from 'clsx';

type CheckboxType = {
    isChecked: boolean;
    title: string;
    className?: string;
    handler: () => void;
};

const Checkbox = ({
    isChecked,
    title,
    className = '',
    handler,
}: CheckboxType) => {
    return (
        <button
            onClick={() => handler()}
            onKeyDown={() => handler()}
            className={clsx(`checkbox`, className)}
        >
            <div className="checkbox_content">
                <div
                    className={clsx(
                        'checkbox_content__label',
                        isChecked ? 'checkbox_content__label--checked' : '',
                    )}
                >
                    <div
                        className={clsx(
                            'checkbox_content__label_icon',
                            isChecked
                                ? 'checkbox_content__label_icon--checked'
                                : '',
                        )}
                    >
                        <CheckIcon />
                    </div>
                </div>
                <div className="checkbox_content__title">{title}</div>
            </div>
        </button>
    );
};
export default Checkbox;
