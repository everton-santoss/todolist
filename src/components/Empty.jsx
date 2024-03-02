import styles from './Empty.module.css'

import Artzero  from '../assets/Clipboard.svg'

export function Empty() {
    return (
        <div className={styles.spanLine}>
                <img src={Artzero} className={styles.Artzero}/>
                <strong className={styles.Strong}>Você ainda não tem tarefas cadastradas</strong>
                <span className={styles.Span}>Crie tarefas e organize seus itens a fazer</span>
            </div>
    )
}