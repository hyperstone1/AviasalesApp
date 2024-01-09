import FiltersLabel from './FiltersLabel';

const Filters = () => {
	return (
		<aside className='filters'>
			<form className='filters__form'>
				<div className='filters__title'>Количество пересадок</div>
				<div className='filters__content'>
					<FiltersLabel>Все</FiltersLabel>
					<FiltersLabel>Без пересадок</FiltersLabel>
					<FiltersLabel>1 пересадка</FiltersLabel>
					<FiltersLabel>2 пересадка</FiltersLabel>
					<FiltersLabel>3 пересадка</FiltersLabel>
				</div>
			</form>
		</aside>
	);
};

export default Filters;
