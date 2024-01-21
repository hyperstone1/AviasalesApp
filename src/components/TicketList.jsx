import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTickets, fetchTicketsRender } from '../store/slices/ticketsSlice/asyncActions';
import sorter from '../utils/sorter';

import Ticket from './Ticket';

const TicketList = () => {
	const { status } = useSelector(store => store.tickets);
	const ticketsStore = useSelector(store => store.tickets.items.tickets);
	const { filterBy, sortBy } = useSelector(store => store.filter);
	// const [tickets, setTickets] = useState([]);
	const [count, setCount] = useState(5);
	const dispatch = useDispatch();
	// console.log(tickets);

	const fetchData = async () => {
		dispatch(fetchTicketsRender());
		dispatch(fetchTickets());
	};

	useEffect(() => {
		fetchData();
		// setTickets(ticketsStore);
	}, []);

	// useEffect(() => {
	// 	console.log(tickets);
	// 	console.log(status);
	// }, [tickets]);
	const sortedTickets = useMemo(() => sorter(ticketsStore, sortBy, filterBy), [ticketsStore, sortBy, filterBy]);

	const elements =
		ticketsStore != undefined &&
		sortedTickets.slice(0, count).map((el, id) => {
			return <Ticket key={`${id}_${el.price}-${el.carrier}`} {...el} />;
		});
	// const sortedList = elements.length > 0 && status !== 'error';
	// const emptyMessage = status !== 'error' && status !== 'loading' ? <Alert message='Рейсов, подходящих под заданные фильтры, не найдено' type='info' showIcon /> : null;

	const handleClick = () => setCount(prev => (prev += 5));

	return (
		<>
			<ul className='ticket-list'>
				{status === 'loading' && <p>Загрузка...</p>}
				{status === 'error' && <p>Ошибка при загрузке билетов</p>}
				{status === 'completed' && elements.length > 0 ? elements : null}
			</ul>
			<button className='more' onClick={handleClick}>
				Показать еще 5 билетов!
			</button>
		</>
	);
};

export default TicketList;
