import React from "react";
import Navbar from "./navbar"
import Card from "./card"
import Jumbotron from "./jumbotron"
import Footer from "./footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const cards = [
		{ id: 1, imgUrl: "https://picsum.photos/id/240/200/300", title: "firstCard", textCard: "This is a first text" },
		{ id: 2, imgUrl: "https://picsum.photos/id/253/200/300", title: "secondCard", textCard: "This is a secont text" },
		{ id: 3, imgUrl: "https://picsum.photos/id/244/200/300", title: "thirdCard", textCard: "This is a third text" },
		{ id: 4, imgUrl: "https://picsum.photos/id/237/200/300", title: "fourthCard", textCard: "This is a fourth text" }
	];

	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-between grap-3 m-0 pt-3">
					{
						cards.map((item, index) => {
							return (
								<Card key={index} item={item}/>
							)
						})
					}
					
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
