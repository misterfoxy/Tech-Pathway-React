import React from "react";
import Nav from "../Nav";
import "./header.css";

function Header({ handleLink }) {
	return (
		<header className="fixed">
			<Nav handleLink={handleLink} />
		</header>
	);
}

export default Header;