import React from 'react';
import './TicketItem.scss';
import { LOGOS } from '../../../constants/companies';
import { Ticket, segment } from '../../../utils/Ticket';
import TicketSegment from './TicketSegment/TicketSegment';

type Props = { ticket: Ticket; index: number };

const TicketItem = (props: Props) => {
    const { ticket, index } = props;
    const formattedNumber = ticket.price.amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const company = LOGOS.find(({ alias }) => ticket.company === alias);
    return (
        <div className="ticket-item">
            <div className="ticket-item__info">
                <div className="ticket-item__info_price">
                    {formattedNumber} {ticket.price.currency}
                </div>
                {company ? (
                    <div className="ticket-item__info_logo">
                        <a href="/">
                            <img src={company.logo} alt={ticket.company} />
                        </a>
                    </div>
                ) : null}
            </div>
            <div className="ticket-item__segments">
                {ticket.way.map((segment: segment, i) => {
                    return (
                        <TicketSegment
                            key={`TicketWay_${ticket.id}_${index}_${i}`}
                            ticket={ticket}
                            segment={segment}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default TicketItem;
