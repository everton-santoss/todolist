import { useState } from 'react'
import styles from './AddTask.module.css'

import { PlusCircle } from '@phosphor-icons/react'

export function AddTask({handleTaskAddition}) {

    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        if (inputData === "") {
            alert("Adicione um título a sua tarefa!")
        }else{
        handleTaskAddition(inputData)
        setInputData("")
    }

}
    return (
            <div className={styles.listInTask}>
                <input 
                    className={styles.inputTask} 
                    type="text" 
                    value={inputData}
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputChange}
                />

                <button onClick={handleAddTaskClick} className={styles.buttunAddTask}>Criar<span><PlusCircle size={19} /></span></button> 
            </div>       
)}