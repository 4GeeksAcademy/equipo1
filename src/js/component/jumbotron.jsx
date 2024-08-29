import React from "react";


const Jumbotron = () => {
    return <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-4 display-md-5 fw-bold">A Warm Welcome!</h1>
      <p className="col-md-8 fs-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, libero ut varius cursus, arcu tortor aliquam urna, in sagittis nulla nulla ac magna. Duis venenatis lectus augue, non sodales sapien mattis ut. Sed dui est, faucibus sit amet iaculis nec, tristique non risus. In nec commodo urna, ut pellentesque metus.</p>
      <button className="btn btn-primary btn-lg" type="button">Call to action</button>
    </div>
  </div>
}

export default Jumbotron;