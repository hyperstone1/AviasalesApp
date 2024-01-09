import { formatPrice } from '../utils/formatCurrency';

import TicketInfo from './TicketInfo';

const Ticket = props => {
	const { price, carrier } = props;

	return (
		<li className='ticket'>
			<div className='ticket__wrapper'>
				<div className='ticket__header'>
					<div className='ticket__price'>{formatPrice(price)}</div>
					<div className='ticket__logo'>
						<img src={`https://pics.avs.io/99/36/${carrier}.png`} alt='' />
					</div>
				</div>
				<TicketInfo {...props} />
			</div>
		</li>
	);
};

export default Ticket;
