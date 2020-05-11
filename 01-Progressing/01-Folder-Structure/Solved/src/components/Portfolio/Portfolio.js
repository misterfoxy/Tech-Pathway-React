import React from "react";
import Card from "../Card";
import "./portfolio.css";

function Portfolio() {
	return (
		<>
			<h3>Portfolio</h3>
			<section className="portfolio">
				<Card title="Project 1" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
				<Card title="Project 2" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
				<Card title="Project 3" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" />
			</section>
		</>
	);
}

export default Portfolio;