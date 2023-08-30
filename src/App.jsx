import './App.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="todo-app">
					<h1 className='todo-app__title'>Tasks</h1>
					<ul className="todo-list">
						<li className='todo-item'>
							<label className='todo-item__task'>
								<input className='todo-item__check' type="checkbox" />
								<span className='todo-item__count'>1.</span>
								<p className='todo-item__text'>First task</p>
							</label>
							<div className='todo-item__action'>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-trash"></i>
								</button>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-pen-to-square"></i>
								</button>
							</div>
						</li>
						<li className='todo-item'>
							<label className='todo-item__task'>
								<input className='todo-item__check' type="checkbox" />
								<span className='todo-item__count'>2.</span>
								<p className='todo-item__text'>Second task</p>
							</label>
							<div className='todo-item__action'>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-trash"></i>
								</button>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-pen-to-square"></i>
								</button>
							</div>
						</li>
						<li className='todo-item'>
							<label className='todo-item__task'>
								<input className='todo-item__check' type="checkbox" />
								<span className='todo-item__count'>3.</span>
								<p className='todo-item__text'>Third task</p>
							</label>
							<div className='todo-item__action'>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-trash"></i>
								</button>
								<button className='todo-item__btn'>
									<i className="fa-solid fa-pen-to-square"></i>
								</button>
							</div>
						</li>
					</ul>
					<div className="todo-creator">
						<input className="todo-creator__text" type="text" placeholder='add new task here...' />
						<button className="todo-creator__create">
							<i className="fa-solid fa-plus"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
