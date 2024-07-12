import moment from 'moment';
import { segment, Ticket } from './Ticket';

export const getMoments = (segment: segment) => {
    return {
        departure: moment(segment.departure, 'YYYY-MM-DD HH:mm:ss'),
        arrival: moment(segment.arrival, 'YYYY-MM-DD HH:mm:ss'),
    };
};
export const segmentflightTime = (segment: segment) => {
    const { departure, arrival } = getMoments(segment);
    let duration = moment.duration(arrival.diff(departure));

    return duration;
};
export const flightTime = (flight: Ticket) => {
    let totalFlightTime = 0;
    flight.way.forEach((segment: segment) => {
        const duration = segmentflightTime(segment);
        totalFlightTime += duration.asHours();
    });
    return totalFlightTime;
};
