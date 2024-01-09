import { formatMinutesToHoursAndMinutes } from '../utils/formattedDuration';
import { calculateArrivalTime } from '../utils/formattedTime';

const TicketInfoItem = props => {
	const { info } = props;

	return (
		<li className='ticket-info-item'>
			<div className='ticket-info-item__item'>
				<span>
					{info.origin} – {info.destination}
				</span>
				<strong>{calculateArrivalTime(info.date, info.duration)}</strong>
			</div>
			<div className='ticket-info-item__item'>
				<span>В пути</span>
				<strong>{formatMinutesToHoursAndMinutes(info.duration)}</strong>
			</div>
			<div className='ticket-info-item__item'>
				<span>{info.stops.length === 0 ? 'нет пересадок' : `${info.stops.length} пересадки`} </span>
				<strong>{info.stops.join(', ')}</strong>
			</div>
		</li>
	);
};

export default TicketInfoItem;
