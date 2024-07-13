import React, { ReactNode, useState } from 'react';
import './Dropdown.scss';
import Checkbox from '../Checkbox/Checkbox';
import clsx from 'clsx';
import { useOutsideClick } from './useClickOutside';

export type option = {
    title: string;
    value: string | number;
    isChecked?: boolean;
};
// eslint-disable-next-line
type Handler = (arg: number) => void;

type Props = {
    options: Array<option>;
    children?: ReactNode;
    handler: Handler;
    className?: string;
    multiple?: boolean;
    align?: string;
};
const Dropdown = (props: Props) => {
    const { children, options, handler, className, multiple, align } = props;
    const [opened, setIsOpened] = useState(false);
    const ref = useOutsideClick(() => {
        setIsOpened(false);
    });

    return (
        <>
            <div ref={ref} className={clsx('dropdown', className)}>
                <button
                    onClick={() => setIsOpened((pre) => !pre)}
                    className={clsx(
                        'dropdown__button',
                        opened ? 'dropdown__button--opened' : '',
                    )}
                >
                    {children}
                </button>
                {opened ? (
                    <div
                        className={clsx(
                            'dropdown__menu',
                            align ? `dropdown__menu--${align}` : '',
                        )}
                    >
                        {options.map((option, i) => {
                            const { title, isChecked } = option;
                            if (multiple) {
                                return (
                                    <Checkbox
                                        className={clsx(
                                            'dropdown__menu__option',
                                        )}
                                        key={`options_Checkbox_${title}`}
                                        isChecked={Boolean(option.isChecked)}
                                        title={title}
                                        handler={() => handler(i)}
                                    />
                                );
                            }
                            return (
                                <button
                                    className={clsx(
                                        'dropdown__menu__option',
                                        isChecked
                                            ? 'dropdown__menu__option--active'
                                            : '',
                                    )}
                                    key={`options_${title}`}
                                    onClick={() => {
                                        handler(i);
                                        setIsOpened(false);
                                    }}
                                >
                                    {title}
                                </button>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        </>
    );
};
export default Dropdown;
