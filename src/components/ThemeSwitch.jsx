import { useContext } from 'react';
import SwitchTheme from '../context/SwitchTheme';
import '../styles/components/themeSwitch.scss';

const ThemeSwitch = () => {
	const { switchTheme, theme } = useContext(SwitchTheme);


	return (
		<div onClick={switchTheme} className='theme-switch'>
			{
				theme === 'dark'
					? <i className="fa-regular fa-lightbulb"></i>
					: <i className="fa-solid fa-lightbulb"></i>
			}
		</div>
	);
};

export default ThemeSwitch;