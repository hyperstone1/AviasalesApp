import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTickets } from '../store/slices/ticketsSlice/asyncActions';

import Ticket from './Ticket';

const TicketList = () => {
	const { items, status } = useSelector(store => store.tickets);
	const [tickets, setTickets] = useState([]);
	const dispatch = useDispatch();

	const fetchData = async () => {
		dispatch(fetchTickets());
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log('render', items);
		if (items.tickets) {
			setTickets(items.tickets);
		}
	}, [items]);

	useEffect(() => {
		console.log(tickets);
		console.log(status);
	}, [tickets]);

	return (
		<ul className='ticket-list'>
			{status === 'loading' && <p>Загрузка...</p>}
			{status === 'error' && <p>Ошибка при загрузке билетов</p>}
			{status === 'completed' && tickets.map((ticket, id) => <Ticket key={id} {...ticket} />)}
		</ul>
	);
};

export default TicketList;
