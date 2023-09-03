import { useState } from 'react';
import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';
import './styles/common.scss'

const App = () => {
	const [todos, setTodos] = useState([]);

	const toggleCompleteTodo = (id) => {
		setTodos(
			todos.map(todo => (id === todo.id) ? { ...todo, completed: !todo.completed } : todo)
		)
	}

	const sortCompletedTodos = (todos) => todos.sort((a, b) => a.completed - b.completed);

	const addTodo = text => {
		const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

		setTodos(
			[...todos, { id, text, completed: false, changing: false }]
		)
	}

	const deleteTodo = id => {
		setTodos(
			todos.filter(todo => (id !== todo.id) && { ...todo })
		)
	}

	const changeTodo = (id, text) => {
		setTodos(
			todos.map(todo => (id === todo.id) ? { ...todo, text, changing: !todo.changing } : { ...todo, changing: false })
		)
	}

	return (
		<div className="container">
			<div className="todo-app">
				<h1 className='todo-app__title'>Tasks</h1>

				<TodoList
					todos={sortCompletedTodos(todos)}
					toggleCompleteTodo={toggleCompleteTodo}
					deleteTodo={deleteTodo}
					changeTodo={changeTodo}
				/>

				<TodoCreator addTodo={addTodo} />

			</div>
		</div>
	);
}

export default App;
