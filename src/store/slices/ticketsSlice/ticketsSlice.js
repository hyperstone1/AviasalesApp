import { createSlice } from '@reduxjs/toolkit';

import { fetchTickets, fetchTicketsRender } from './asyncActions';
import { Status } from './types';

const initialState = {
	items: [],
	status: Status.LOADING, // loading | success | error
};

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: builder => {
		// fetch all tickets
		builder.addCase(fetchTickets.pending, state => {
			state.status = Status.LOADING;
			state.items = [];
			// if(state.items <= 500){
			// 	state.items
			// }
		});
		builder.addCase(fetchTickets.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		});

		builder.addCase(fetchTickets.rejected, state => {
			state.status = Status.ERROR;
			state.items = [];
		});

		//Fetch first 500 tickets

		builder.addCase(fetchTicketsRender.pending, state => {
			state.status = Status.LOADING;
			state.items = [];
		});

		builder.addCase(fetchTicketsRender.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		});

		builder.addCase(fetchTicketsRender.rejected, state => {
			state.status = Status.ERROR;
			state.items = [];
		});
		// [fetchPizzas.pending]: (state) => {
		//   state.status = 'loading';
		//   state.items = [];
		// },
		// [fetchPizzas.fulfilled]: (state, action) => {
		//   state.items = action.payload;
		//   state.status = 'success';
		// },
		// [fetchPizzas.rejected]: (state) => {
		//   state.status = 'error';
		//   state.items = [];
		// },
	},
});
export const selectPizzaData = state => state.pizza;

export const { setItems } = ticketsSlice.actions;
export default ticketsSlice.reducer;
