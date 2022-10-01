import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Homes from '../image/home.png';
import Literatur from '../image/literatur.png'

// component
import Login from '../component/Login'
import Register from '../component/Register';

function Landing() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);



    const registerHere = (e) => {
        e.preventDefault();
        setRegisterShow(false);
        setLoginShow(true);
    };

    const loginHere = (e) => {
        e.preventDefault();
        setLoginShow(false);
        setRegisterShow(true);
    };

    const Navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        Navigate('/')
    }


    return (
        <>
            <div>
                <img src={Literatur} alt="literatur" className='literatur' />
            </div>
            <Container className="landing">
                <Row noGutters style={{ width: '100%' }}>
                    <Col md={5}>
                        <h1 className="tnr text-light mt-5" style={{ fontFamily: 'Times New Roman' }}>
                            <strong style={{fontSize: "100px"}}>
                                source <i>of</i>
                            </strong>
                            <br/>
                            <strong style={{fontSize: "100px"}}>
                            intelligence
                            </strong>
                        </h1>
                        <p className='text-light'>Sign-up and recieve unlimited access to all</p>
                        <p className='text-light'>of your literatures - share your literatures.</p>
                        <br />
                        <div className="mb-5">
                            <Button className="me-2" variant="danger" size="lg" onClick={() => setRegisterShow(true)} style={{border: 'none', height: "50px", width: "200px"}}>
                                Sign Up
                            </Button>
                            <Button variant="light" size="lg" onClick={() => setLoginShow(true)} style={{border: 'none', height: "50px", width: "200px"}}>
                                Sign In
                            </Button>
                        </div>
                        <Login
                            loginHere={loginHere}
                            loginShow={loginShow}
                            setLoginShow={setLoginShow}
                            setIsLogin={setIsLogin}
                        />
                        <Register
                            registerHere={registerHere}
                            registerShow={registerShow}
                            setRegisterShow={setRegisterShow}
                        />
                    </Col>
                    <div className='d-flex justify-content-end '>
                        <img src={Homes} alt="landing" className="landing-image" style={{width: "700px", height: "800px", marginTop: "-80px"}} />

                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Landing