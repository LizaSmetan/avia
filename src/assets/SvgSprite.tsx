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
    <svg width="1rem" height="1rem" viewBox="0 -960 960 960" {...props}>
        <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z" />
    </svg>
);
export const SortIcon: React.FC = (props: SvgProps = {}) => (
    <svg width="1rem" height="1rem" viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </svg>
);
