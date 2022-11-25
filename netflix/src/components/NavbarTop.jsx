import { Container, Navbar, Nav, NavDropdown, Image } from "bootstrap";

import netflix_logo from "../assets/netflix_logo.png";
import userprofile from "../assets/avatar.png";

function NavbarTop() {
  return (
    <>
      <Navbar className="darkBackground">
        <Container>
          <Image src={netflix_logo} id="logo" />
          <Nav className="me-auto">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item mr-2">Tv Shows</li>
                <li className="nav-item mr-2">Movies</li>
                <li className="nav-item mr-2">Recently Added</li>
                <li className="nav-item mr-2">My List</li>
              </ul>
            </div>
            <NavDropdown
              className="dropdown-menu-left mr-1"
              title={<Image src={userprofile} width="32" alt="user pic" />}
            >
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarTop;
