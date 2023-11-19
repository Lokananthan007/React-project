import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {HiArrowRight} from 'react-icons/hi';
import  { useState } from 'react';


function Menubar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  return (
    
      <div>
           <Navbar expand="lg"  className="navbar fixed-top container-fluid">
        <Navbar.Brand className='brand'  href="#home"><h1>CarM4</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="toggle-icon" />
        <Navbar.Collapse className='justify-content-md-center' id="basic-navbar-nav">
          <Nav  className="mr-auto custom-nav">
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href="/about">About</Nav.Link>
            <NavDropdown className="custom-dropdown justify-content-center" title="Serivce" id="basic-nav-dropdown"
             show={isDropdownOpen}
             onMouseEnter={() => setIsDropdownOpen(true)}
             onMouseLeave={() => setIsDropdownOpen(false)}
              >
              <NavDropdown.Item className='item' href="/service">Car Service<HiArrowRight  className="arrow-icon"/></NavDropdown.Item>
              <NavDropdown.Item className='item' href="/dealar">
                Car Dealar<HiArrowRight className="arrow-icon"/>
              </NavDropdown.Item>
              <NavDropdown.Item  className='item' href="/wash">Car Wash<HiArrowRight className="arrow-icon"/></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className='cart' href="/cart"><AiOutlineShoppingCart style={{width: '25px',height:'25px'}}/></Nav.Link>
    </Navbar>
      </div>
  );
}

export default Menubar;



