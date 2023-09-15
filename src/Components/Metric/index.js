import React from 'react'
import styles from './Metric.module.css'
import { useMetrics } from '../../Context/MetricsContext'

export default function Metric({weight,date,loss, id}) {
  const { deleteMetric } = useMetrics()
  return (
    <li className={styles.metric}>
        <div>
          <h3 className={styles.titulo}>{`${weight} KG`} {loss ? `(${loss >= 0 ? "Loss " : "Gain"}: ${Math.abs(loss)})` : ""}</h3>
          <span className={styles.date} >{`${formatDate(date)}`}</span>
        </div>
        <button className={styles.delete} onClick={()=>deleteMetric(id)}>Excluir</button>
    </li>
  )

  function formatDate(date){
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${year}/${month}/${day} ${hour}:${minute}`;
  }
}
