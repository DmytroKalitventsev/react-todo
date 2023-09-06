import { useEffect, useState } from 'react';
import TodoCreator from './components/TodoCreator';
import TodoLists from './components/TodoLists';
import './styles/common.scss'

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1, title: 'Hello', completed: true, changing: false
		},
		{
			id: 2, title: 'Hello', completed: false, changing: false
		},
		// {
		// 	id: 3, title: 'Hello', completed: false, changing: false
		// },
	]);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then(response => response.json())
	// 		.then(json => setTodos(json.filter(todo => todo.id <= 10)));
	// }, []);

	const toggleCompleteTodo = (id) => {
		setTodos(
			todos.map(todo => (id === todo.id) ? { ...todo, completed: !todo.completed } : todo)
		)
	}

	const addTodo = title => {
		const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

		setTodos(
			[...todos, { id, title, completed: false, changing: false }]
		)
	}

	const deleteTodo = id => {
		setTodos(
			todos.filter(todo => (id !== todo.id) && { ...todo })
		)
	}

	const changeTodo = (id, title) => {
		setTodos(
			todos.map(todo => (id === todo.id) ? { ...todo, title, changing: !todo.changing } : { ...todo, changing: false })
		)
	}

	return (
		<div className="container">
			<div className="todo-app">
				<h1 className='todo-app__title'>Tasks</h1>

				<TodoLists
					todos={todos}
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
