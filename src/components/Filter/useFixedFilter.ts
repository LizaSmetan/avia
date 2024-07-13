import { useEffect, useRef } from 'react';

export const useFixedFilter = () => {
    const filterRef = useRef(null);

    useEffect(() => {
        const scrollContainer = document.getElementById('root');
        if (filterRef.current && scrollContainer) {
            const element: HTMLDivElement = filterRef.current;
            const resetStyles = () => {
                if (element) {
                    element.style.position = '';
                    element.style.top = '';
                    element.style.width = '';
                }
            };

            const func = () => {
                const offset = 12;
                if (filterRef?.current) {
                    const containerElem = element.parentElement;
                    if (containerElem) {
                        const values = containerElem?.getBoundingClientRect();

                        const elem = element.getBoundingClientRect();
                        const { height, width } = values || {};

                        const top =
                            containerElem.offsetTop -
                                scrollContainer.scrollTop || values.top;
                        if (top < offset && height > elem.height) {
                            element.style.position = 'fixed';
                            element.style.width = `${width}px`;
                            if (offset + elem.height > top + height) {
                                element.style.top = `${top + height - elem.height}px`;
                            } else {
                                element.style.top = `${offset}px`;
                            }
                        } else {
                            resetStyles();
                        }
                    }
                }
            };

            func();

            scrollContainer.addEventListener('scroll', func);
            window.addEventListener('resize', func);
            return () => {
                scrollContainer.removeEventListener('scroll', func);
                window.removeEventListener('resize', func);
            };
        }
    }, []);

    return filterRef;
};
