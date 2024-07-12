import moment from 'moment';
import { segment } from '../../../../utils/Ticket';
import { declOfNumber } from '../../../../utils/declOfNumber';
import { getMoments, segmentflightTime } from '../../../../utils/flightTime';

export type Info = {
    title: string;
    content: string;
};
export const getSegmentData = (segment: segment) => {
    const duration = segmentflightTime(segment);
    let hoursDiff = duration.hours();
    let minutesDiff = duration.minutes();
    let formattedTime = `${hoursDiff}г${minutesDiff ? ` ${minutesDiff}хв` : ''}`;

    const { departure, arrival } = getMoments(segment);

    return [
        {
            title: `${segment.from} - ${segment.to}`,
            content:
                departure.format('HH:mm') + ' - ' + arrival.format('HH:mm'),
        },
        {
            title: 'В дорозі',
            content: formattedTime,
        },
        {
            title: `${segment.transfers.length} ${declOfNumber(segment.transfers.length, ['пересадка', 'пересадки', 'пересадок'])}`,
            content: segment.transfers.join(','),
        },
    ];
};
