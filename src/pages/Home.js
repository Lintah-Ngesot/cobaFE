import React from 'react'
import Navbars from '../component/Navbars'
import Col from 'react-bootstrap/Col';
import { Form, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AiOutlineSearch } from 'react-icons/ai';
import Literatur from '../assets/Vector.png'
function Home() {
    return (
        <>
            <div>
                <Navbars />
            </div>

            <img src={Literatur} alt="literatur" className="home-image"/>
            <br />
            <div style={{marginLeft: "400px"}}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Search for literature"  />
                        </Col>
                        <Col>
                            <Button
                                className="ml-2"
                                type="submit"
                                style={{
                                    padding: 5,
                                    backgroundColor: "red"
                                }}
                                href="/search"
                            >
                                <AiOutlineSearch size="26px" color="white" />
                            </Button>
                        </Col>

                    </Row>
                </Form>
            </div>

        </>
    )
}

export default Home;