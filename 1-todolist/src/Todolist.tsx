import { ChangeEvent, useState, KeyboardEvent } from 'react';
import {TaskType} from "./App";
import {Button} from "./Button";

type FilterValuesType = 'all' | 'active' | 'completed'

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	addTask: (taskTitle: string) => void
}

export const Todolist = ({title, tasks, removeTask, addTask}: PropsType) => {

	const [filter, setFilter] = useState('all');
	const [taskTitle, setTaskTitle] = useState('');

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

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value);
	}

	const addTaskHandler = () => {
		if (isTaskTitleValid) {
			addTask(taskTitle);
			setTaskTitle('');
		}
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTaskHandler();
		}
	}

	const removeTaskHandler = (taskId: string) => {
		removeTask(taskId);
	}

	const isTaskTitleValid = taskTitle.length < 16;

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					value={taskTitle}
					onChange={changeTaskTitleHandler}
					onKeyUp={addTaskOnKeyUpHandler}
					placeholder='max length 15'
				/>
				<Button title={'+'} onClick={addTaskHandler} isDisabled={!isTaskTitleValid}/>
				{!isTaskTitleValid && <div>Max length is 15</div>}
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
								<Button title={'x'} onClick={() => removeTaskHandler(task.id)} />
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
