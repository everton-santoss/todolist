import styles from './TaskStatus.module.css'

export function TaskStatus({status, tasks}) {
    const soma = status
    const completedTasks = tasks.filter(task=> task.completed).length;

    return (
        <div className={styles.spanStatus}>
            <label 
                className={styles.spanCreated}>Tarefas criadas 
                <span className={styles.spanStatusIn}>{soma}</span>
            </label>
            <label className={styles.spanCompleted}>Concluídas <span className={styles.spanStatusOn}>{completedTasks}<span> de</span><span> {soma}</span></span></label>
        </div>
    )
}