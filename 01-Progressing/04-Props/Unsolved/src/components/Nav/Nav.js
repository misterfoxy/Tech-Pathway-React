import React from "react";
import "./nav.css";

// TODO: Add Props to argument in function
function Nav(props) {
	const handleScroll = y => {
		window.scroll({ top: y, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			{/* TODO: Add handleScroll to John Doe (HINT: onClick={() => handleScroll(0)}) */}
			<h1><button onClick={() => handleScroll(0)}>John Doe</button></h1>
			<ul>
				{/* TODO: Add handleLink through props for each button below (HINT: onClick={() => handleLink("https://google.com/")}) */}
				<li><button onClick={() => props.handleLink(props.resume)}>Resume</button></li>
				<li><button onClick={() => props.handleLink(props.github)}>GitHub</button></li>
				<li><button onClick={() => props.handleLink(props.linkedin)}>LinkedIn</button></li>
				{/* TODO: Add handleScroll to Contact similar to how it was done for John Doe */}
				<li><button onClick={()=> handleScroll(1000)}>Contact</button></li>
			</ul>
		</nav>
	);
}

export default Nav;