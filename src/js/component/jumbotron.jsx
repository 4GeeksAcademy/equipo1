import React from "react";


const Jumbotron = () => {
  return <div className="d-flex justify-content-center">
    <div className=" bg-ligth rounded-3 py-5">
      <div className="container">
        <h1 className="display-4 display-md-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, libero ut varius cursus, arcu tortor aliquam urna, in sagittis nulla nulla ac magna. Duis venenatis lectus augue, non sodales sapien mattis ut. Sed dui est, faucibus sit amet iaculis nec, tristique non risus. In nec commodo urna, ut pellentesque metus.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action</button>
      </div>
    </div>
  </div>
}

export default Jumbotron;