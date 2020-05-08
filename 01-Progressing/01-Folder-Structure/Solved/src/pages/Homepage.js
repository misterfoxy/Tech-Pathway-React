import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Homepage() {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Body />
			<Footer />
		</>
	);
}

export default Homepage;