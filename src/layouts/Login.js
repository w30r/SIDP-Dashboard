import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Login() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  // React.useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   mainPanel.current.scrollTop = 0;
  //   if (
  //     window.innerWidth < 123 &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //     var element = document.getElementById("bodyClick");
  //     element.parentNode.removeChild(element);
  //   }
  // }, [location]);
  return (
    <>
      <div className="container">
        <img
          src={require("assets/img/reactlogo.png").default}
          alt="..."
          width="100"
          height="100"
        />
        <span className="h1">REMOTE PATIENT MONITORING SYSTEM</span>
        <div className="center">
          <input className="form-control" placeholder="Email" type="text" />
          <input
            className="form-control"
            placeholder="Password"
            type="password"
          />
        </div>
        <a href="http://localhost:3000/admin/dashboard">
          <button className="center-btn btn">Login</button>
        </a>
      </div>
    </>
  );
}

export default Login;
