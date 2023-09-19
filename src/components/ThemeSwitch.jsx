import '../styles/components/themeSwitch.scss';

const switchTheme = () => {

}

const ThemeSwitch = () => {
	return (
		<div onClick={switchTheme} className='theme-switch'>
			<i className="fa-regular fa-lightbulb"></i>
			{/* <i className="fa-solid fa-lightbulb" style={{color: '#ffff00'}}></i> */}
		</div>
	);
};

export default ThemeSwitch;