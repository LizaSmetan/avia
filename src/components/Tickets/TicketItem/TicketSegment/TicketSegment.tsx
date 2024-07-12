import React from 'react';
import { Segment, Ticket } from '../../../../utils/Ticket';
import { getSegmentData, Info } from './getSegmentData';
import './TicketSegment.scss';

type Props = { segment: Segment; index: number; ticket: Ticket };
const TicketSegment = (props: Props) => {
    const { segment, index, ticket } = props;

    const data = getSegmentData(segment);

    return (
        <div className="segment-row">
            {data.map((segmentInfo: Info, i: number) => {
                return (
                    <div
                        className="segment-row__item"
                        key={`TicketSegment_${ticket.id}_${index}_${i}`}
                    >
                        <div className="segment-row__item__title">
                            {segmentInfo.title}
                        </div>
                        <div className="segment-row__item__content">
                            {segmentInfo.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default TicketSegment;
