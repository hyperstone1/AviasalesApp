import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { setItems } from './ticketsSlice';

export const fetchTicketsRender = createAsyncThunk('tickets/fetchRenderTickets', async (_, { dispatch }) => {
	console.log('dispatch: ', dispatch);
	const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
	const tickets = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`);

	return tickets.data;
});

export const fetchTickets = createAsyncThunk('tickets/fetchTicketsStatus', async (_, { dispatch }) => {
	console.log('dispatch: ', dispatch);
	const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
	let allTickets = {};
	let ticketsData = [];
	let stop = false;

	do {
		try {
			const tickets = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`);
			ticketsData = [...ticketsData, ...tickets.data.tickets];
			if (tickets === undefined) {
				// dispatch(setError());
				continue;
			}
			if (ticketsData.length === 500) {
				dispatch(setItems({ tickets: ticketsData, stop: false }));
			}
			if (tickets.data.stop === true) {
				console.log('stop false');
				stop = true;
			}
		} catch (error) {
			continue;
		}
	} while (!stop);

	console.log(allTickets);
	return { tickets: ticketsData, stop: true };
});
