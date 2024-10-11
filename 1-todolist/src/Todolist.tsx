import { useState } from 'react';
import {TaskType} from "./App";
import {Button} from "./Button";

type FilterValuesType = 'all' | 'active' | 'completed'

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: number) => void
}

export const Todolist = ({title, tasks, removeTask}: PropsType) => {

	const [filter, setFilter] = useState('all');

	let filteredTasks = tasks;
	if (filter === 'active') {
		filteredTasks = tasks.filter(task => !task.isDone)
	}

	if (filter === 'completed') {
		filteredTasks = tasks.filter(task => task.isDone)
	}

	const changeFilter = (newFilterValue: FilterValuesType) => {
		setFilter(newFilterValue);
	}

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}  onClick={() => {}}/>
			</div>
			{
				filteredTasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{filteredTasks.map((task) => {
							return (
							<li key={task.id}>
								<input type="checkbox" checked={task.isDone}/>
								<span>{task.title}</span>
								<Button title={'x'} onClick={() => removeTask(task.id)} />
							</li>
						)})}
					</ul>
			}
			<div>
				<Button title={'All'} onClick={() => { changeFilter("all") }}/>
				<Button title={'Active'} onClick={() => { changeFilter("active") }}/>
				<Button title={'Completed'} onClick={() => { changeFilter("completed") }}/>
			</div>
		</div>
	)
}
