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
    const durations = [
        duration.days() && duration.days() + 'д',
        duration.hours() && duration.hours() + 'г',
        duration.minutes() && duration.minutes() + 'хв',
    ];

    const { departure, arrival } = getMoments(segment);

    return [
        {
            title: `${segment.from} - ${segment.to}`,
            content:
                departure.format('HH:mm') + ' - ' + arrival.format('HH:mm'),
        },
        {
            title: 'В дорозі',
            content: durations.filter((d) => d).join(' '),
        },
        {
            title: segment.transfers.length
                ? `${segment.transfers.length} ${declOfNumber(segment.transfers.length, ['пересадка', 'пересадки', 'пересадок'])}`
                : 'Без пересадок',
            content: segment.transfers.join(', ').toUpperCase(),
        },
    ];
};
