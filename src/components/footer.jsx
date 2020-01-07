import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context/context';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
            {value => {
                return (
            <div>
             <FooterWrapper>
            <div className='footer'>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; product app {new Date().getFullYear()}. all
                    rights reserved{" "}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </FooterWrapper>
        </div> 
         );
        }}
      </ProductConsumer>
        );
    }
}
 


const FooterWrapper = styled.footer`
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 9%;
  text-align: center;
  background: var(--darkGrey);
  color: var(--mainWhite);
}
`;




export default Footer;