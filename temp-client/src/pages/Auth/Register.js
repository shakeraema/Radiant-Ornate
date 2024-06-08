import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return (
    <Layout title={"Register-Ecommerce App"}>
      <div className="register">
        <h1>Register page</h1>
        <form>
          <div className="mb-3">
          
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
          
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone No."
            />
          </div>
          <div className="mb-3">

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
