import React from "react";
import "./card.css";

// TODO: Add props to Card function as an argument
function Card(props) {
	return (
		<section className="card">
			{/* TODO: Add the link to the href attribute through the use of props */}
			<a href={props.deployed} target="_blank">
				{/* TODO: Add the project title through the use of props */}
				<h5>{props.title}</h5>
				<img src="https://via.placeholder.com/300" />
			</a>
			{/* TODO: Add the project description through the use of props */}
			<p>{props.desc}</p>
			<ul>
				{/* TODO: Add props for handleClick for each button and provide each corresponding link as an argument */}
				<li><button onClick={() => props.handleLink(props.deployed)} className="btn-primary">Deployed</button></li>
				<li><button onClick={() => props.handleLink(props.github)} className="btn-primary">GitHub</button></li>
			</ul>
		</section>
	);
}

export default Card;