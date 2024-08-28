import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Card*/}
            <div className="container mt-5 flex-grow-1">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis minima non dignissimos cumque maiores!</p>
                            </div>
                            <div className="card-footer bg-white d-flex justify-content-center align-items-center">
                                <button type="button" className="btn btn-primary">Find Out More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, tenetur dignissimos adipisci autem aliquid ex?</p>
                            </div>
                            <div className="card-footer bg-white d-flex justify-content-center align-items-center">
                                <button type="button" className="btn btn-primary">Find Out More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, autem doloremque. Nostrum voluptas necessitatibus sapiente?</p>
                            </div>
                            <div className="card-footer bg-white d-flex justify-content-center align-items-center">
                                <button type="button" className="btn btn-primary">Find Out More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tempora. Fuga explicabo ducimus laudantium ab?</p>
                            </div>
                            <div className="card-footer bg-white d-flex justify-content-center align-items-center">
                                <button type="button" className="btn btn-primary">Find Out More!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white mt-5 py-4 mt-auto">
                <div className="container text-center">
                    <p className="mb-0">Copyright © Your Website 2024</p>
                </div>
            </footer>
        </div>

	)
};

export default Home;
