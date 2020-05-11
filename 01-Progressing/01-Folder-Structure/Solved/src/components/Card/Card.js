import React from "react";
import "./card.css";

function Card(props) {
	return (
		<section className="card">
			<a href={props.deployed}>
				<h5>{props.title}</h5>
				<img src={props.image} />
			</a>
			<p>{props.desc}</p>
			<ul>
				<li><a href={props.deployed}>Deployed</a></li>
				<li><a href={props.github}>GitHub</a></li>
			</ul>
		</section>
	);
}

export default Card;