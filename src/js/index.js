//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<><Navbar /><div className="container"><Jumbotron />
<div className="d-flex flex-wrap justify-content-between"><Card /><Card /><Card /><Card /></div></div><Footer /></>);
