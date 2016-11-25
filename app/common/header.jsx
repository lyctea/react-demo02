import {
	Navbar,Nav,NavItem,NavDropdown,
	MenuItem,
	FormGroup,FormControl,
	Button
} from "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
	render(){
		return (
			<Navbar inverse>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">React-Bootstrap</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		        <NavItem eventKey={1} href="#">Link</NavItem>
		        <NavItem eventKey={2} href="#">Link</NavItem>
		        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
		          <MenuItem eventKey={3.1}>Action</MenuItem>
		          <MenuItem eventKey={3.2}>Another action</MenuItem>
		          <MenuItem eventKey={3.3}>Something else here</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey={3.3}>Separated link</MenuItem>
		        </NavDropdown>
		      </Nav>
		      <Nav pullRight>
		        <Navbar.Form pullLeft>
			        <FormGroup>
			          <FormControl type="text" placeholder="Search" />
			        </FormGroup>
			        {' '}
			        <Button type="submit">Submit</Button>
			      </Navbar.Form>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>		
		);
	}
});

export default Header;