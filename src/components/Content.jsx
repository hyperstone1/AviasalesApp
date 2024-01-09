import Navigation from './Navigation';
import TicketList from './TicketList';

const Content = () => {
	return (
		<section className='content'>
			<Navigation />
			<TicketList />
			<button className='more'>Показать еще 5 билетов!</button>
		</section>
	);
};

export default Content;
