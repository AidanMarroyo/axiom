import { Link, Outlet } from 'react-router-dom';
import CrwnLogo from '../../assets/crown.svg';
import './navigation.scss';

const Navigation = () => {
	return (
		<div>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<img src={CrwnLogo} alt='Logo' className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Navigation;
