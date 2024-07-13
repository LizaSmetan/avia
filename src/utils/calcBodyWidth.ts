export const calcBodyWidth = () => {
    const scrollContainer = document.getElementById('root');
    if (scrollContainer && window.innerWidth >= 768) {
        // Перевіряємо, чи є горизонтальний скрол
        const horizontalScroll =
            scrollContainer.offsetWidth - scrollContainer.clientWidth;

        if (!horizontalScroll) {
            // Визначаємо ширину скролбара
            const scrollDiv = document.createElement('div');
            scrollDiv.style.overflow = 'scroll';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            document.body.appendChild(scrollDiv);
            const scrollbarWidth =
                scrollDiv.offsetWidth - scrollDiv.clientWidth;

            document.body.removeChild(scrollDiv);

            scrollContainer.style.paddingRight = `${scrollbarWidth}px`;
            return scrollbarWidth;
        } else {
            scrollContainer.style.paddingRight = '0';
        }
    } else if (scrollContainer) {
        scrollContainer.style.paddingRight = '0';
    }
};
