import React from "react";
import "./nav.css";

function Nav({ handleLink }) {
	const handleScroll = y => {
		window.scroll({ top: y, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			<h1><button onClick={() => handleScroll(0)}>John Doe</button></h1>
			<ul>
				<li><button onClick={() => handleLink("https://google.com/")}>Resume</button></li>
				<li><button onClick={() => handleLink("https://github.com/")}>GitHub</button></li>
				<li><button onClick={() => handleLink("https://linkedin.com/")}>LinkedIn</button></li>
				<li><button onClick={() => handleScroll(document.body.scrollHeight)}>Contact</button></li>
			</ul>
		</nav>
	);
}

export default Nav;