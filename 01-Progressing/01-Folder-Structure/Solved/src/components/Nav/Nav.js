import React from "react";
import "./nav.css";

function Nav() {
	return (
		<nav className="container">
			<h1><a href="#top">John Doe</a></h1>
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