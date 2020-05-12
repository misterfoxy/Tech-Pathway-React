import React from "react";
import "./nav.css";

function Nav() {
	const handleClick = () => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			<h1><button onClick={handleClick}>John Doe</button></h1>
			<ul>
				<li><a href="#">Resume</a></li>
				<li><a href="#">GitHub</a></li>
				<li><a href="#">LinkedIn</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
}

export default Nav;