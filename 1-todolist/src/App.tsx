import { useState } from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
		{ id: v1(), title: 'Redux', isDone: false },
		{ id: v1(), title: 'Typescript', isDone: false },
		{ id: v1(), title: 'RTK query', isDone: false },
	]);

	const removeTask = (taskId: string) => {
		const filteredTasks = tasks.filter(task => {
			return task.id !== taskId
		});
		setTasks(filteredTasks);
	}

	const addTask = (title: string) => {
		const newTask = {
			id: v1(),
			title,
			isDone: false,
		}
		const newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
		const newState = tasks.map(t => (t.id == taskId ? { ...t, isDone: taskStatus } : t));
		setTasks(newState);
	}

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={tasks}
				removeTask={removeTask}
				addTask={addTask}
				changeTaskStatus={changeTaskStatus}
			/>
		</div>
	);
}

export default App;
