const FiltersLabel = ({ children }) => {
	return (
		<label className='label'>
			<input type='checkbox' className='checkbox' name='filter' />
			<div className='custom-checkbox'></div>
			<span>{children}</span>
		</label>
	);
};

export default FiltersLabel;
