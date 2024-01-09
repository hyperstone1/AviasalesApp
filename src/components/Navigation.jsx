const Navigation = () => {
	return (
		<div className='navigation'>
			<div className='navigation__inner'>
				<button className='navigation__btn active' type='button'>
					Самый дешевый
				</button>
				<button className='navigation__btn' type='button'>
					Самый быстрый
				</button>
				<button className='navigation__btn' type='button'>
					Оптимальный
				</button>
			</div>
		</div>
	);
};

export default Navigation;
