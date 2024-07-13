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
    <svg width="1rem" height="1rem" viewBox="0 0 32 32" {...props}>
        <path d="M14 4v-0.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18zM8 8v-4h4v4h-4zM26 13.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-18v4h18v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h6v-4h-6v-0.5zM20 18v-4h4v4h-4zM14 23.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18v-0.5zM8 28v-4h4v4h-4z"></path>
    </svg>
);
export const SortIcon: React.FC = (props: SvgProps = {}) => (
    <svg width="1rem" height="1rem" viewBox="0 0 32 32" {...props}>
        <path d="M10 24v-24h-4v24h-5l7 7 7-7h-5z"></path>
        <path d="M14 18h18v4h-18v-4z"></path>
        <path d="M14 12h14v4h-14v-4z"></path>
        <path d="M14 6h10v4h-10v-4z"></path>
        <path d="M14 0h6v4h-6v-4z"></path>
    </svg>
);
