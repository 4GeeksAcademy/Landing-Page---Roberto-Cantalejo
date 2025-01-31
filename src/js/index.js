//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('navbar')).render(<Navbar/>);
ReactDOM.createRoot(document.getElementById('jumbotron')).render(<Jumbotron/>);