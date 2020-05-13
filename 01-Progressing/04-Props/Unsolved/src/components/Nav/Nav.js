import React from "react";
import "./nav.css";

// TODO: Add Props to argument in function
function Nav() {
	const handleScroll = y => {
		window.scroll({ top: y, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			{/* TODO: Add handleScroll to John Doe (HINT: onClick={() => handleScroll(0)}) */}
			<h1><button>John Doe</button></h1>
			<ul>
				{/* TODO: Add handleLink through props for each button below (HINT: onClick={() => handleLink("https://google.com/")}) */}
				<li><button>Resume</button></li>
				<li><button>GitHub</button></li>
				<li><button>LinkedIn</button></li>
				<li><button>Contact</button></li>
			</ul>
		</nav>
	);
}

export default Nav;