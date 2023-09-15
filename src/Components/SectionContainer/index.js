import React from 'react'
import styles from './SectionContainer.module.css'

export default function SectionContainer({children, title}) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  )
}
