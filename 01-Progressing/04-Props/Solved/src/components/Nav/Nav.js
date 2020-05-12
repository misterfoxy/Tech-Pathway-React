import React from "react";
import "./nav.css";

function Nav() {
	const handleClick = y => {
		window.scroll({ top: y, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			<h1><button onClick={() => handleClick(0)}>John Doe</button></h1>
			<ul>
				<li><a href="#" target="_blank">Resume</a></li>
				<li><a href="#" target="_blank">GitHub</a></li>
				<li><a href="#" target="_blank">LinkedIn</a></li>
				<li><button onClick={() => handleClick(document.body.scrollHeight)}>Contact</button></li>
			</ul>
		</nav>
	);
}

export default Nav;