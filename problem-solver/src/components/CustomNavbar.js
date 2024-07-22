import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';

import {
 
  Navbar,
  
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { doLogout, getCurrentUser, isLoggedIn } from '../auth';
const CustomNavbar=()=>{
    let navigate=useNavigate()
    const[isOpen,setIsOpen]=useState(false)

    const[logIn,setLogIn]=useState(false)
    const[user,setUser]=useState(undefined)

    useEffect(()=>{

      setLogIn(isLoggedIn())
      setUser(getCurrentUser())

    },[logIn])

    const logOut=()=>{
      doLogout(()=>{
        setLogIn(false)
        localStorage.removeItem('token');
        navigate('/login')
      });
    }
    return(
        <div>
        <Navbar color="dark" dark expand="md" fixed="" className='px-5'>
          <NavbarBrand tag={ReactLink} to="/">IdeaHub</NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink tag={ReactLink} to="/">Ideas</NavLink>
              </NavItem>
    
              
              
            </Nav>
            <Nav navbar>
              {logIn && (
                <>
                <NavItem>
                <NavLink tag={ReactLink} to={`/user/MyIdeas/${user.id}`} >My Ideas</NavLink>
              </NavItem>
                <NavItem>
                <NavLink tag={ReactLink} to={`/user/PostIdea/${user.id}`} >Post Idea</NavLink>
              </NavItem>
                <NavItem>
                <NavLink tag={ReactLink} to={`/user/profile/${user.id}`} ><i class="ri-user-line"></i></NavLink>
              </NavItem>
                <NavItem>
                <NavLink tag={ReactLink} to="/login" onClick={logOut}>Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >{user.username}</NavLink>
              </NavItem>
              </>

              )}
              {
                !logIn && (
                  <>
                   <NavItem>
                <NavLink tag={ReactLink} to="/login">Login</NavLink>
              </NavItem>

            
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                 Signup
                </NavLink>
              </NavItem>
                  </>
                )
              }
            </Nav>
           
            </Collapse>
          </Navbar>
      </div>
    );
}
export default CustomNavbar;