import React from "react";

const Cards = () => {
    return (
        <div className="d-flex justify-content-center">
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
        </div>
    )
}

export default Cards;