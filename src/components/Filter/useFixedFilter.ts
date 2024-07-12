import { useEffect, useRef } from 'react';

export const useFixedFilter = () => {
    const filterRef = useRef(null);

    useEffect(() => {
        if (filterRef.current) {
            const element: HTMLDivElement = filterRef.current;
            const resetStyles = () => {
                if (element) {
                    element.style.position = '';
                    element.style.top = '';
                    element.style.width = '';
                }
            };

            const func = () => {
                if (filterRef?.current) {
                    const containerElem = element.parentElement;
                    if (containerElem) {
                        const values = containerElem?.getBoundingClientRect();

                        const elem = element.getBoundingClientRect();
                        const { height, width } = values || {};

                        const top =
                            containerElem.offsetTop - window?.scrollY ||
                            values.top;
                        if (top < 0 && height > elem.height) {
                            element.style.position = 'fixed';
                            element.style.width = `${width}px`;
                            if (0 + elem.height > top + height) {
                                element.style.top = `${top + height - elem.height}px`;
                            } else {
                                element.style.top = `0`;
                            }
                        } else {
                            resetStyles();
                        }
                    }
                }
            };

            func();
            window.addEventListener('scroll', func);
            return () => {
                window.removeEventListener('scroll', func);
            };
        }
    }, []);

    return filterRef;
};
