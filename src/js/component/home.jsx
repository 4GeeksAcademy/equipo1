import React from "react";
import Jumbotron from "./jumbotron.jsx"
import Navbar from "./navbar.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
            
            {/* Navbar */}
            <Navbar></Navbar>

		<div>
			<Jumbotron/>
		</div>


            {/* Card*/}
            <Cards></Cards>

            {/* Footer */}
            <Footer></Footer>
        </div>

	)
};

export default Home;
