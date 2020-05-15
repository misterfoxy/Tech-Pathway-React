import React from "react";
import Nav from "../Nav";
import "./header.css";

// TODO: Add props to Header function as an argument
function Header(props) {
	return (
		<header className="fixed">
			{/* TODO: Add handleLink prop to Nav through the props from the component function declaration */}
			<Nav {...props}/>
		</header>
	);
}

export default Header;