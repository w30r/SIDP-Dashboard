/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import LoginLayout from "layouts/Login.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAcwlgFZyeng5jPCYnj67DWt80Seto7D5E",
  authDomain: "medicaltracking-18c2e.firebaseapp.com",
  databaseURL:
    "https://medicaltracking-18c2e-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "medicaltracking-18c2e",
  storageBucket: "medicaltracking-18c2e.appspot.com",
  messagingSenderId: "368420362938",
  appId: "1:368420362938:web:af387bdb60f018062b0083",
  measurementId: "G-R4W8R7VYJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/login" render={(props) => <LoginLayout {...props} />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
