import '../styles/components/todoHeader.scss';
import ThemeSwitch from './ThemeSwitch';

const TodoHeader = () => {
	return (
		<div className='todo-header'>
			<h1 className='todo-header__title'>Tasks</h1>

			<ThemeSwitch />

		</div>
	);
};

export default TodoHeader;