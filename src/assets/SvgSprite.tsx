import React from 'react';

type SvgProps = {
    width?: number;
    height?: number;
    className?: string;
    style?: object;
    id?: string;
    fill?: string;
};

export const CheckIcon: React.FC = (props: SvgProps = {}) => (
    <svg width="1rem" height="1rem" viewBox="0 0 12 8" {...props}>
        <path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" />
    </svg>
);
