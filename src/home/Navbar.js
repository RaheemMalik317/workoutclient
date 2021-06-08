import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavbarToggler,
  Nav,
  Button,
} from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Workout Log</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} narbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
      <Sitebar clickLogout />
    </Navbar>
  );
};

export default Sitebar;
