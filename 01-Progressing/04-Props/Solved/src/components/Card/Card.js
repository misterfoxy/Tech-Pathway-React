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
				<li><button className="btn-primary" onClick={() => props.handleLink(props.deployed)}>Deployed</button></li>
				<li><button className="btn-primary" onClick={() => props.handleLink(props.github)}>GitHub</button></li>
			</ul>
		</section>
	);
}

export default Card;