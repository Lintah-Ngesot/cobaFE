import React from 'react'
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AiOutlineSearch } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Homes from '../image/home.png'
import { Link } from 'react-router-dom';
function Searchresault() {
    return (
        <>
            <div className="d-grid gap-2" >
                <Form>
                    <Row>
                        <Col xs={7} style={{
                            marginLeft: "120px",
                            justifyContent: "center"
                        }}>
                            <Form.Control placeholder="Search for literature" />
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
            <div>
                <div style={{ marginLeft: "115px", marginTop: "20px", color: "white" }}>
                    <p>Anytime</p>
                    <DropdownButton id="dropdown-basic-button" title="Since " variant="light">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <CardGroup style={{ marginLeft: "115px", marginTop: "10px" }}>
                <div class="row">
                    <div class="col-4">
                        <Link to="/detail" className='text-decoraction-none'>
                            <Card>
                                <Card.Img variant="top" src={Homes} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </div>
                </div>

            </CardGroup>



        </>
    )
}

export default Searchresault