import React from "react";

function Card(props) {
	return (
		<section className="card">
			<a href={props.link}>
				<h5>{props.title}</h5>
				<img src={props.image} />
			</a>
			<p>{props.desc}</p>
		</section>
	);
}

export default Card;