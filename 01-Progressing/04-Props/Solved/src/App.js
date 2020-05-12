import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./main.css";

function App() {
	return (
		<>
			<Header />
			<main className="container additional-padding">
				<Body />
			</main>
			<Footer />
		</>
	);
}

export default App;