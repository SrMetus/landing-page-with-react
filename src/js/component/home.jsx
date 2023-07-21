import React from "react";
import Navbar from "./navbar"
import Card from "./card"
import Jumbotron from "./jumbotron"
import Footer from "./footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-between gap-2 m-0 pt-3">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
