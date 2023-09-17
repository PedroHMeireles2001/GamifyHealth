import React, { useState } from "react";
import styles from "./WeightInput.module.css";
import { useMetrics } from "../../Context/MetricsContext";

export default function WeightInput() {
	const [weight,setWeight] = useState(0);
	const { addMetric } = useMetrics();
	return (
		<form className={styles.form}>
			<input className={styles.input} type='number' onChange={(target)=>setWeight(target.target.value)} />
			<button onClick={(e)=>addMetric(e,weight)} className={styles.button}>+</button>
		</form>
	);
}