import TicketInfoItem from './TicketInfoItem';

const TicketInfo = props => {
	return (
		<ul className='ticket-info'>
			<TicketInfoItem info={props.segments[0]} {...props} />
			<TicketInfoItem info={props.segments[1]} {...props} />
		</ul>
	);
};

export default TicketInfo;
