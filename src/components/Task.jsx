import { Trash, Check } from "@phosphor-icons/react"

import styles from './Task.module.css'

export function Task({task , handleTaskClick, handleTaskDeletion}) {

    
    return (
        <div className={styles.container}>
            <button 
                className={styles.buttonCheck} 
                style={task.completed ? {background: "#5E60CE",border: "none" } : {}}
                onClick={() => handleTaskClick(task.id)}>
                    {task.completed ? <Check size={10} className={styles.Check}/> : <div />}
            </button>

            <h2 
                style={task.completed ? {
                    textDecoration: "line-through",
                    color: "#808080" } : {}}
                className={styles.title}>{task.title}
            </h2>
                <Trash onClick={() => handleTaskDeletion(task.id)} className={styles.buttonDelete} size={20}/>
        </div>
    )
}