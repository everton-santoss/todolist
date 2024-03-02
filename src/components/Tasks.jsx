import { Task } from "./Task";

export function Tasks({tasks, handleTaskClick, handleTaskDeletion}) { 

    return (
        <div>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>))}
        </div>
    )
}