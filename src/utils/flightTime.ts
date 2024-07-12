import moment from 'moment';
import { Segment, Ticket } from './Ticket';

// Дати в moment
export const getMoments = (segment: Segment) => {
    return {
        departure: moment(segment.departure, 'YYYY-MM-DD HH:mm:ss'),
        arrival: moment(segment.arrival, 'YYYY-MM-DD HH:mm:ss'),
    };
};
// Довжина польоту в один бік
export const segmentflightTime = (segment: Segment) => {
    const { departure, arrival } = getMoments(segment);
    let duration = moment.duration(arrival.diff(departure));

    return duration;
};
// Довжина польоту в обидва боки
export const flightTime = (flight: Ticket) => {
    let totalFlightTime = 0;
    flight.way.forEach((segment: Segment) => {
        const duration = segmentflightTime(segment);
        totalFlightTime += duration.asHours();
    });
    return totalFlightTime;
};
