import React, { Component } from 'react';
import Hero from '../components/reusable/hero';
import { Link } from "react-router-dom";
import mainBcg from "../assets/mainBcg.jpeg";

class Home extends Component {
    state = {  }
    render() { 
        return (    
            <div>
            <Hero img={mainBcg} title="Welcome to Home Page" max="true">
            {/* <h2 className="text-uppercase">page not found</h2> */}
            <Link to="/product" className="main-link" style={{ marginTop: "2rem" }}>
              Go to Product List
            </Link>
            </Hero>
            </div>   
            );
    }
}
 
export default Home;