import React from "react";
import Jumbotron from "./jumbotron.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Jumbotron/>
		</div>
	);
};

export default Home;
