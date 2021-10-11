import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";

export default function Root(props) {

  // test comment 1
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      {(
        <>
          <Link className="navbar-brand" to="/">
            <img
              src="https://single-spa.js.org/img/logo-white-bgblue.svg"
              className="d-inline-block align-top"
              height="30"
              width="30"
              alt=""
            />
            Microfrontends Demo
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/svod">
                  SVOD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/marketplace">
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moments">
                  Moments
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={()=>{}}>
            <em className="text-white">Logout</em>
          </div>
        </>
      )}
    </div>
  );
}
