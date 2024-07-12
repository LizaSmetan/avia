import React from 'react';
import './Tickets.scss';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { showMore } from '../../store/actions';
import TicketItem from './TicketItem/TicketItem';

const Tickets: React.FC = () => {
    const { data, count } = useSelector((state: RootState) => state.tickets);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="tickets">
            {data.map((ticket, index) => {
                return (
                    <TicketItem
                        ticket={ticket}
                        index={index}
                        key={`Tickets_${ticket.id}_${index}`}
                    />
                );
            })}
            {count > data.length ? (
                <button onClick={() => dispatch(showMore())}>
                    показати ще
                </button>
            ) : null}
        </div>
    );
};
export default Tickets;
