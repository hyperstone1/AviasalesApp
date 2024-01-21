import { useDispatch } from 'react-redux';

import { sortButtons } from '../utils/constants';
import { setSort } from '../store/slices/filterSlice/filterSlice';

import NavigationBtn from './NavigationBtn';

const Navigation = () => {
	const dispatch = useDispatch();

	return (
		<div className='navigation'>
			<nav className='navigation__inner'>
				{sortButtons.map(btn => (
					<NavigationBtn key={btn.sort} {...btn} onClick={() => dispatch(setSort(btn.sort))} />
				))}
			</nav>
		</div>
	);
};

export default Navigation;
