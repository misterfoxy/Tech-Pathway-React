import React from "react";
import Card from "../Card";

function Portfolio() {
	return (
		<section className="portfolio">
			<h3>Portfolio</h3>
			<Card title="Project 1" link="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
			<Card title="Project 2" link="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
			<Card title="Project 3" link="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
		</section>
	);
}

export default Portfolio;