import React,{Component} from  'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import FaHome from 'react-icons/lib/fa/home'

class Header extends Component{
	render(){
		return(
			<header>
				<Navbar>					    
					<Nav>
		          		<NavItem eventKey={1} href="#">
		   				   <h4 className="home"><FaHome /> Home</h4>
		   				</NavItem>
					</Nav>
					<Nav pullRight>
					      <NavDropdown className="home" eventKey={3} title="example@vivriti.com" id="basic-nav-dropdown">
					        <MenuItem eventKey={3.1}>Profile</MenuItem>
					        <MenuItem eventKey={3.2}>Orders</MenuItem>
					        <MenuItem eventKey={3.3}>Rewards</MenuItem>
					        <MenuItem eventKey={3.3}>Logout</MenuItem>
					      </NavDropdown>
    				</Nav>
				</Navbar>
        	</header>
		);
	}
}

export default Header;