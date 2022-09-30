import React from 'react'
import NavbarAdmin from '../component/NavbarAdmin';
import { Table, Card, Dropdown } from "react-bootstrap";

const styles = {
    cardd: {
        backgroundColor: "black",
        margin: "20px",
    },
};

function Admin() {
    return (
        <>
            <div><NavbarAdmin /></div>
            <Card style={styles.cardd}>
                <Card.Body className="text-light m-3">
                    <Card.Title className="mb-4">Book verification</Card.Title>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr className="text-dark">
                                <th>No</th>
                                <th>Users or Author</th>
                                <th>ISBN</th>
                                <th>Literature</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Radif Ganteng</td>
                                <td>9781789807554</td>
                                <td className='text-primary'>what if ? absurd Question.pdf</td>
                                <td className="text-success">Approve</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Haris Rahman</td>
                                <td>9781789807555</td>
                                <td className='text-primary'>Glyph.pdf</td>
                                <td className="text-success">Approve</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Amin Subagiyo</td>
                                <td>9781789807666</td>
                                <td className='text-primary'>sistem pakar.pdf</td>
                                <td className="text-danger">Cancel</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Haris Astina</td>
                                <td>9781789807576</td>
                                <td className='text-primary'>tessonroad.pdf</td>
                                <td className="text-warning">Waiting to be verifed</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Azis Oni On</td>
                                <td>9781789807709</td>
                                <td className='text-primary'>psy.pdf</td>
                                <td className="text-warning">Waiting to be verifed</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Sugeng No Pants</td>
                                <td>9781789807000</td>
                                <td className='text-primary'>management.pdf</td>
                                <td className="text-warning">Waiting to be verifed</td>
                                <td>
                                    <Dropdown className="me-5">
                                        <Dropdown.Toggle
                                            variant="blue"
                                            id="dropdown-basic"
                                            style={{
                                                backgroundColor: "none",
                                                color: "blue",
                                                border: "none",
                                            }}
                                            className="fs-4"
                                        ></Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-dark">
                                            <Dropdown.Item
                                                href="#/action-1"
                                                className="text-success text-center"
                                            >
                                                <span>Approved</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                className="text-danger text-center"
                                            >
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default Admin;