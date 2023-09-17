import React from "react";
import styles from "./SectionContainer.module.css";
import PropTypes from "prop-types";

export default function SectionContainer({children, title}) {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			{children}
		</section>
	);
}

SectionContainer.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string
};

