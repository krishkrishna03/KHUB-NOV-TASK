import React, { useState } from 'react';
import {FaBars,FaTh,FaClone, FaSitemap, FaTable,FaFileAlt,FaPeopleArrows} from "react-icons/fa"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/card",
            name:"Card",
            icon:<FaClone/>
        },
        {
            path:"/piechart",
            name:"PieChart",
            icon:<FaSitemap/>
        },
        {
            path:"/table",
            name:"Table",
            icon:<FaTable/>
        },
        {
          path:"/form",
          name:"Form",
          icon:<FaFileAlt/>
      }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><FaPeopleArrows/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;