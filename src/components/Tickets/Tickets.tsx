import React, { useEffect } from 'react';
import './Tickets.scss';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { showMore } from '../../store/actions';
import TicketItem from './TicketItem/TicketItem';
import Button from '../../elements/Button/Button';
import { PER_PAGE } from '../../utils/DataFactory';
import { calcBodyWidth } from '../../utils/calcBodyWidth';

const Tickets: React.FC = () => {
    const { data, count } = useSelector((state: RootState) => state.tickets);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        calcBodyWidth();
    }, [data.length]);
    return (
        <div className="tickets">
            {data.length ? (
                data.map((ticket, index) => {
                    return (
                        <TicketItem
                            ticket={ticket}
                            index={index}
                            key={`Tickets_${ticket.id}_${index}`}
                        />
                    );
                })
            ) : (
                <div className="no-data">
                    За вашим запитом нічого не знайдено
                </div>
            )}
            {count > data.length ? (
                <Button
                    className="show-more-button"
                    onClick={() => dispatch(showMore())}
                >
                    Показати ще {PER_PAGE} квитків
                </Button>
            ) : null}
        </div>
    );
};
export default Tickets;
