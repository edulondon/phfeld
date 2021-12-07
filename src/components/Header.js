import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import {} from "react-router-dom";
//import { logout } from "../actions/userActions";
import './header.css';

function Header() {
  //const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [userInfo]);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <ul>
            <li>
              <p> <Link to="/">Home</Link></p>
            </li>
            <li>
              <p> <Link to="/about">About Us</Link> </p>
            </li>
            <li>
              <p> <Link to="/gallery">Gallery</Link> </p>
            </li>
            <li>
              <p> <Link to="/contact">Contact Us</Link> </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p> <Link to="/login">Sign in</Link> </p>
        <Link to="/register">
        <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {/* <p><a href="/">Home</a></p>
            <p><a href="about">About us</a></p>
            <p><a href="gallery">Gallery</a></p>
            <p><a href="contact">Contact us</a></p> */}
              <ul>
                <li>
                  <p> <Link to="/">Home</Link> </p>
                </li>
                <li>
                  <p> <Link to="/about">About Us</Link> </p>
                </li>
                <li>
                  <p> <Link to="/gallery">Gallery</Link> </p>
                </li>
                <li>
                  <p> <Link to="/contact">Contact Us</Link> </p>
                </li>
              </ul>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
    // <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="/">Note Zipper</Navbar.Brand>

    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="m-auto">
    //         {userInfo && (
    //           <Form inline>
    //             <FormControl
    //               type="text"
    //               placeholder="Search"
    //               className="mr-sm-2"
    //               onChange={(e) => setSearch(e.target.value)}
    //             />
    //           </Form>
    //         )}
    //       </Nav>
    //       <Nav>
    //         {userInfo ? (
    //           <>
    //             <Nav.Link href="/mynotes">My Notes</Nav.Link>
    //             <NavDropdown
    //               title={`${userInfo.name}`}
    //               id="collasible-nav-dropdown"
    //             >
    //               <NavDropdown.Item href="/profile">
    //                 {/* <img
    //                   alt=""
    //                   src={`${userInfo.pic}`}
    //                   width="25"
    //                   height="25"
    //                   style={{ marginRight: 10 }}
    //                 /> */}
    //                 My Profile
    //               </NavDropdown.Item>

    //               <NavDropdown.Divider />
    //               <NavDropdown.Item onClick={logoutHandler}>
    //                 Logout
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           </>
    //         ) : (
    //           <Nav.Link href="/login">Login</Nav.Link>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header;
