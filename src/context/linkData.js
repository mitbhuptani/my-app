import React from 'react';
import {FaHome} from 'react-icons/fa';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {MdPlaylistAddCheck} from "react-icons/md";

export const linkData = [
    {
      id: 1,
      text: "home",
      path: "/home",
      isIcon :<FaHome className='icon-details'/>
    },
    {
      id: 2,
      text: "Product List",
      path: "/product",
      isIcon :<MdPlaylistAddCheck style={{fontSize:'2rem'}}/>
    },
    {
      id: 3,
      text: "Add New Product",
      path: "/product/new",
      isIcon : <IoIosAddCircleOutline style={{fontSize:'1.8rem'}}/>
    }
  ];
  