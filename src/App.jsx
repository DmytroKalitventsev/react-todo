import './styles/common.scss';
import { useState } from 'react';
import TodoCreator from './components/TodoCreator';
import TodoLists from './components/TodoLists';
import ToolsForTodos from './context/ToolsForTodos';

const App = () => {
	const [dataTodos, setDataTodos] = useState([]);

	const addTodo = title => {
		const id = dataTodos.length ? dataTodos[dataTodos.length - 1].id + 1 : 1;

		setDataTodos(
			[...dataTodos, { id, title, completed: false, changing: false }]
		)
	}

	const deleteTodo = id => {
		setDataTodos(
			dataTodos.filter(todo => (id !== todo.id) && { ...todo })
		)
	}

	const changeTodo = (id, title) => {
		setDataTodos(
			dataTodos.map(todo => (id === todo.id) ? { ...todo, title, changing: !todo.changing } : { ...todo, changing: false })
		)
	}

	const toggleCompleteTodo = (id) => {
		setDataTodos(
			dataTodos.map(todo => (id === todo.id) ? { ...todo, completed: !todo.completed } : todo)
		)
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
				<h1 className='todo-app__title'>Tasks</h1>

				<ToolsForTodos.Provider value={toolsForTodos}>
					<TodoLists/>
				</ToolsForTodos.Provider>

				<TodoCreator addTodo={addTodo} />

			</div>
		</div>
	);
}

export default App;
