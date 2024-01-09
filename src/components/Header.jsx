import logo from '../images/Logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src={logo} alt='' />
			</div>
		</header>
	);
};
export default Header;
