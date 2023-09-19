import './styles/common.scss';
import { useEffect, useState } from 'react';
import ToolsForTodos from './context/ToolsForTodos';
import TodoCreator from './components/TodoCreator';
import TodoLists from './components/TodoLists';
import TodoHeader from './components/TodoHeader';

const App = () => {
	const [dataTodos, setDataTodos] = useState([]);

	const getLocalDataTodos = () => JSON.parse(localStorage.getItem('dataTodos'));
	const saveLocalDataTodos = () => localStorage.setItem('dataTodos', JSON.stringify(dataTodos));

	useEffect(() => {
		if (getLocalDataTodos()) setDataTodos(getLocalDataTodos());
	}, []);

	useEffect(() => {
		saveLocalDataTodos();
	}, [dataTodos]);

	const addTodo = title => {
		const id = dataTodos.length ? dataTodos[dataTodos.length - 1].id + 1 : 1;

		setDataTodos(
			[...dataTodos, { id, title, completed: false, changing: false }]
		)

		saveLocalDataTodos();
	}

	const deleteTodo = id => {
		setDataTodos(
			dataTodos.filter(todo => (id !== todo.id) && { ...todo })
		)

		saveLocalDataTodos();
	}

	const changeTodo = (id, title) => {
		setDataTodos(
			dataTodos.map(todo => (id === todo.id) ? { ...todo, title, changing: !todo.changing } : { ...todo, changing: false })
		)

		saveLocalDataTodos();
	}

	const toggleCompleteTodo = (id) => {
		setDataTodos(
			dataTodos.map(todo => (id === todo.id) ? { ...todo, completed: !todo.completed } : todo)
		)

		saveLocalDataTodos();
	}

	const toolsForTodos = {
		dataTodos,
		deleteTodo,
		changeTodo,
		toggleCompleteTodo,
	}

	return (
		<div className="container">
			<div className="todo-app">

				<TodoHeader />

				<ToolsForTodos.Provider value={toolsForTodos}>
					<TodoLists />
				</ToolsForTodos.Provider>

				<TodoCreator addTodo={addTodo} />

			</div>
		</div>
	);
}

export default App;
