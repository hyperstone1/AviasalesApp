import { useSelector } from 'react-redux';

const FiltersLabel = ({ id, name, handleChange }) => {
	const filterBy = useSelector(state => state.filter.filterBy);
	const check = filterBy.filter(item => item === id);

	return (
		<label className='label'>
			<input type='checkbox' checked={check.length} className='checkbox' name='filter' onChange={handleChange} />
			<div className='custom-checkbox'></div>
			<span>{name}</span>
		</label>
	);
};

export default FiltersLabel;
