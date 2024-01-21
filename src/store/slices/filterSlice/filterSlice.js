import { createSlice } from '@reduxjs/toolkit';

import { filterCheckboxes } from '../../../utils/constants';

const initialState = {
	filterBy: [...filterCheckboxes.map(item => item.id)],
	sortBy: 'cheapest',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			const { id } = action.payload;
			if (id === 0) {
				state.filterBy.includes(0) ? (state.filterBy = 0) : (state.filterBy = [0, 1, 2, 3, 4]);
			} else {
				state.filterBy.includes(id) ? (state.filterBy = state.filterBy.filter(item => item != id && item !== 0)) : (state.filterBy = [...state.filterBy, id]);
				if (!state.filterBy.includes(id)) {
					const containsAllNumbers = [...initialState.filterBy.slice(1)].every(num => state.filterBy.includes(num));
					containsAllNumbers && !state.filterBy.includes(0) ? (state.filterBy = [...state.filterBy, 0]) : null;
				}
			}
		},
		setSort(state, action) {
			state.sortBy = action.payload;
		},
	},
});

export const { setFilter, setSort } = filterSlice.actions;
export default filterSlice.reducer;
