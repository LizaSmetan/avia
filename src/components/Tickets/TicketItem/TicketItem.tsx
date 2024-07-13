import React from 'react';
import './TicketItem.scss';
import { LOGOS } from '../../../constants/companies';
import { Ticket, Segment } from '../../../utils/Ticket';
import TicketSegment from './TicketSegment/TicketSegment';
import clsx from 'clsx';

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
                {/* Якщо зображення з прозорістю (png) - буде додано тінь */}
                {company ? (
                    <div
                        className={clsx(
                            'ticket-item__info_logo',
                            company.logo.slice(-4) === '.png' ||
                                company.logo.startsWith('data:image/png;')
                                ? 'ticket-item__info_logo--shadowed'
                                : '',
                        )}
                    >
                        <a href={process.env.PUBLIC_URL}>
                            <img src={company.logo} alt={ticket.company} />
                        </a>
                    </div>
                ) : null}
            </div>
            <div className="ticket-item__segments">
                {ticket.way.map((segment: Segment, i) => {
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
