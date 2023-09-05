// import { useState } from "react";
import { Employees } from "./components/Employees";
import { Blog } from "./components/Blog";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-md">
          <a className="navbar-brand fs-2" href="#">
            JAC ENTERPRISES
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end fs-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">Home</a>
              <a className="nav-link mx-3" href="#">Features</a>
              <a className="nav-link active" href="#">About the Team </a>
            </div>
          </div>
        </div>
      </nav>
        <div className="container">
          <h2 className="my-2">About The Team</h2>
          <Employees />
        </div>
    </>
  );
}

export default App;
