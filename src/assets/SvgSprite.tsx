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
export const FilterIcon: React.FC = (props: SvgProps = {}) => (
    <svg width="1rem" height="1rem" viewBox="0 0 512 512" {...props}>
        <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
    </svg>
);
export const SortIcon: React.FC = (props: SvgProps = {}) => (
    <svg width="1rem" height="1rem" viewBox="0 0 512 512" {...props}>
        <path
            style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
            d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"
        />
    </svg>
);
