import React, { useContext } from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../image/literatur.png"
import {UserContext} from '../context/userContext'
function Navbars() {

    const [state, dispatch] = useContext(UserContext)

    function handleLogOut() {
        return dispatch({
            type:"LOGOUT",
        })
    }

    return (
        <>
            <Navbar>
                <Navbar
                    fixed="top"
                    bg="black"
                    variant="dark"
                    expand="lg"
                    className="navbg"
                    style={{ height: "10vh" }}
                >
                    <Container>
                        <Nav>
                            <Nav.Link>
                                <Link to="/profile" className="navlink text-white text-decoration-none">
                                    Profile
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/mycollection" className="navlink text-white text-decoration-none">
                                    My Collection
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/addliterature" className="navlink text-white text-decoration-none">
                                    Add Literature
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Button as={Link} to='/' onClick={handleLogOut} className="btn bg-danger">
                                    Logout
                                </Button>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Brand as={Link} to="/home" style={{ marginLeft: "380px" }}>
                            <img src={Logo} alt="" />
                        </Navbar.Brand>

                    </Container>
                </Navbar>
            </Navbar>

        </>
    )
}

export default Navbars;