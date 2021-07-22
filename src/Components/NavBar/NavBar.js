import "./NavBar_Syles.css"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavbarAll = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navBar" expand="md">
        <NavbarBrand href="/">Astro-DEV</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/rover-info">RoverInfo</NavLink>
            </NavItem>
            <UncontrolledDropdown color="dark" nav inNavbar>
              <DropdownToggle color="dark" nav caret>
                Foto del dia
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="noWhite" href="/photo-today">
                  Foto de hoy
                </DropdownItem>
                <DropdownItem divider />              
                <DropdownItem className="noWhite" href="/date">
                  Elige una fecha
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarAll;