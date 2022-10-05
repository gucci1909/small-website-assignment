import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

function Navbar() {
  const {Logout} = useContext(AppContext);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-success bg-success`}>
        <div className="container-fluid">
          <p className="navbar-brand">
            <NavLink
              to="/"
              className={() => style.Title}
              end
              style={({ isActive }) =>
                isActive ? { color: "lightyellow" } : { color: "#000000" }
              }
            >
              Home
            </NavLink>
            <NavLink to="/shoppingcart">

            <img src="https://www.pngkit.com/png/detail/134-1343890_shopping-cart-png-image-shopping-cart-icon-svg.png" className={style.shoppingCart} alt="" />

            </NavLink>
          </p>
          {/* <button className="btn btn-danger mb-3 me-auto" onClick={Logout}>Logout</button> */}
          <ul className="navbar-nav mb-lg-1">
            <li className="nav-item">
              <p className="nav-link" aria-current="page">
                <NavLink
                  to="/Products"
                  className={() => style.Navbar}
                  end
                  style={({ isActive }) =>
                    isActive ? { color: "lightyellow" } : { color: "#000000" }
                  }
                >
                  Product
                </NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink
                  to="/About"
                  className={() => style.Navbar}
                  end
                  style={({ isActive }) =>
                    isActive ? { color: "lightyellow" } : { color: "#000000" }
                  }
                >
                  About
                </NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink
                  to="/FAQ"
                  className={() => style.Navbar}
                  style={({ isActive }) =>
                    isActive ? { color: "lightyellow" } : { color: "#000000" }
                  }
                >
                  FAQ
                </NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink
                  to="/Login"
                  className={() => style.Navbar}
                  style={({ isActive }) =>
                    isActive ? { color: "lightyellow" } : { color: "#000000" }
                  }
                >
                  LOGIN
                </NavLink>
              </p>
            </li>
            <button className="btn btn-danger mb-3 me-auto" onClick={Logout}>Logout</button>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink
                  to="/Contact"
                  className={() => style.Navbar}
                  style={({ isActive }) =>
                    isActive ? { color: "lightyellow" } : { color: "#000000" }
                  }
                >
                  Contact
                </NavLink>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
