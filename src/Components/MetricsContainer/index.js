import React from "react";
import { useMetrics } from "../../Context/MetricsContext";
import Metric from "../Metric";
import styles from "./MetricsContainer.module.css";

export default function MetricsContainer() {
	const { metrics } = useMetrics();
	return (
		<ul className={styles.container}>
			{metrics.map(metric => (
				<Metric key={metric.id} weight={metric.weight} date={metric.date} loss={metric.loss} id={metric.id} />
			))}
		</ul>
	);
}
