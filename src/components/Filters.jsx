import { useDispatch } from 'react-redux';

import { filterCheckboxes } from '../utils/constants';
import { setFilter } from '../store/slices/filterSlice/filterSlice';

import FiltersLabel from './FiltersLabel';

const Filters = () => {
	const dispatch = useDispatch();
	return (
		<aside className='filters'>
			<form className='filters__form'>
				<div className='filters__title'>Количество пересадок</div>
				<div className='filters__content'>
					{filterCheckboxes.map((checkbox, id) => (
						<FiltersLabel key={`${id}-${checkbox.name}_${checkbox.id}`} handleChange={() => dispatch(setFilter({ id: checkbox.id }))} {...checkbox} />
					))}
				</div>
			</form>
		</aside>
	);
};

export default Filters;
