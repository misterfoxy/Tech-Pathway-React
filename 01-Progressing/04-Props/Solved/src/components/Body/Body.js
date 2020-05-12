import React from "react";
import Card from "../Card";
import "./body.css";

function Body() {
	const handleClick = link => {
		window.location.href = link;
	}
	
	return (
		<main className="container additional-padding">
			<section className="portfolio">
				<h3>Portfolio</h3>
				<section className="projects">
					<Card title="Project 1" github="https://github.com/misterfoxy/Tech-Pathway-React" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
					<Card title="Project 2" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
					<Card title="Project 3" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
					<Card title="Project 4" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
					<Card title="Project 5" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
					<Card title="Project 6" github="#" deployed="#" image="https://via.placeholder.com/300" desc="lorem ipsum" handleClick={handleClick} />
				</section>
			</section>
			<section className="about">
				<h3>About Me</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</p>
				<p>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</p>
			</section>
			<section className="contact">
				<h3>Contact</h3>
				<ul>
					<li>Email: <a href="mailto:john@john.com">john@john.com</a></li>
					<li>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></li>
				</ul>
			</section>
		</main>
	);
}

export default Body;