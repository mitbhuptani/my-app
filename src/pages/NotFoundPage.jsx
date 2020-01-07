import React, { Component } from 'react';
import Hero from '../components/reusable/hero';
import defaultBcg from "../assets/defaultBcg.jpeg";
import { Link } from "react-router-dom";

class NotFound extends Component {
    state = {  }
    render() { 
        return (    
        <div>
        <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          return home
        </Link>
        </Hero>
        </div>  
        );
    }
}
 
export default NotFound;