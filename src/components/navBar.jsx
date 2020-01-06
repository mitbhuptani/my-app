import React, { Component } from 'react';
import { FaBars,FaUserCircle} from "react-icons/fa";
import PALogo from '../assets/PAlogo.png';
import styled from "styled-components";
import {ProductConsumer} from '../context/context';

class NavBar extends Component {
    state = {}
    render() { 
        return ( 
        <ProductConsumer>
        {value => {
        const { handleSidebar } = value;
        return(
        <div>
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={PALogo} alt="product app logo" className='logo-setting'/>
              <div className="nav-cart">
                <div className='dropdown'> <FaUserCircle className="nav-icon"/>
                <div className="dropdown-content">
                    <li className='sidebar-link'> Test User</li>
                    <li className="divider"></li>
                    <li className='sidebar-link'>
                        Log Out
                    </li>
                </div>
                </div>
              </div>
            </div>
          </NavWrapper>
        </div> 
        );
    }}
    </ProductConsumer>
        );
    }
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .logo-setting{
    width : 190px;
  }
  .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  right:0;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.divider{
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
}
.sidebar-link {
    display: block;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    background: transparent;
}
.sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-decoration: none;
}
.nav-cart {
    position: relative;
}
.cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

 
export default NavBar;