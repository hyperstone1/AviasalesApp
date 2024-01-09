import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTickets = createAsyncThunk('tickets/fetchTicketsStatus', async () => {
	const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
	const tickets = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`);
	return tickets.data;
});
