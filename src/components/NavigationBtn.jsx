import { useSelector } from 'react-redux';

const NavigationBtn = ({ title, sort, onClick }) => {
	const sortBy = useSelector(state => state.filter.sortBy);

	let classes = 'navigation__btn';
	if (sort === sortBy) classes += ' active';

	return (
		<label className={classes}>
			<input type='radio' name='navigation' checked={sort === sortBy} onChange={onClick} />
			{title}
		</label>
	);
};

export default NavigationBtn;
