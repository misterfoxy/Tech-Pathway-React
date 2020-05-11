import React from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./main.css";

function App() {
	return (
		<>
			<Header />
			<main className="container additional-padding">
				{/* <About /> */}
				<Portfolio />
				{/* <Contact /> */}
			</main>
			<Footer />
		</>
	);
}

export default App;