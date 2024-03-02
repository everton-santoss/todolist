import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskStatus } from './components/TaskStatus'
import { Tasks } from './components/Tasks'
import { Empty } from './components/Empty'

function App() { 

  const [tasks, setTasks] = useState([])

  const status = tasks.reduce((acc) => {
    return acc + 1
  }, 0)

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }];
    setTasks(newTask)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
        if (task.id === taskId) return {...task, completed: !task.completed}
        return task;
    })
    setTasks(newTasks)
}

const handleTaskDeletion = (taskId) => {
  const ValueConfirm = confirm("Deseja remover essa tarefa?")
  if (ValueConfirm === true) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }
}

  return (
    <div className={styles.App}>
      <Header />
        <div className={styles.StylesTask}>
          <AddTask handleTaskAddition={handleTaskAddition}/>
          <TaskStatus 
            status={status}
            tasks={tasks}
          />
          <Tasks 
            tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                console.log(task)
              ))}
            </div>
          ) : (
            <Empty />
          )}

          
      </div>
    </div>
  ) 
}
export default App
