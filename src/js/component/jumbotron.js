import React from "react";

const Jumbotron = () => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron bg-success text-white pb-5">
			<h1 className="display-4">Welcome to react</h1>
			<p className="lead">React is the most popular rendering library in the world</p>
			<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">
                Go to the official website
			</a>
		</div>
	);
};

export default Jumbotron