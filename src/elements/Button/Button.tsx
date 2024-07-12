import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.scss';

type Props = {
    children?: ReactNode;
    className?: string;
    onClick: MouseEventHandler;
    type?: string;
};
const Button: React.FC<Props> = ({
    type = 'default',
    children,
    className = '',
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`button ${className} button--${type}`}
        >
            {children}
        </button>
    );
};

export default Button;
