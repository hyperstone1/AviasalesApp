import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice/filterSlice';
import tickets from './slices/ticketsSlice/ticketsSlice';

export const store = configureStore({
	reducer: {
		filter,
		tickets,
	},
});
