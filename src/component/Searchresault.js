import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { API } from "../config/api";
import jurnal from "../assets/jurnal.png";
function Searchresault() {
  // Fetching LITERATUR data from database
  let { data: literaturs, refetch: literatursRefetch } = useQuery(
    "literatursCache",
    async () => {
      const response = await API.get("/literaturs");
      return response.data.data;
    }
  );

    // filter search
  const [dataFilter, setDataFilter] = useState([]);

  function handleChangeLiterature(e) {
    if (!e.target.value) { 
      setDataFilter(literaturs); 
      return;
    }
    const filter = literaturs?.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDataFilter(filter);
  }

  useEffect(() => {
    if (literaturs) setDataFilter(literaturs);
  }, [literaturs]);

  return (
    <>
      <div className="d-grid gap-2">
        <Form>
          <Row>
            <Col
              xs={7}
              style={{
                marginLeft: "120px",
                justifyContent: "center",
              }}
            >
              <Form.Control
                placeholder="Search for literature"
                onChange={handleChangeLiterature}
              />
            </Col>
            <Col>
              <Button
                 as={Link} to ="/search"
                className="ml-2"
                type="submit"
                style={{
                  padding: 5,
                  backgroundColor: "red",
                }}
                // href="/search"
              >
                <AiOutlineSearch size="26px" color="white" />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <div style={{ marginLeft: "115px", marginTop: "20px", color: "white" }}>
          <h5 style={{color: "red"}}>Anytime</h5>
          <br/>
          <DropdownButton
            id="dropdown-basic-button"
            title="Since "
            variant="light"
          >
            <Dropdown.Item href="#/action-1">Since 2020</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Since 2015</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Since 2010</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <br/>
      <CardGroup style={{ marginLeft: "115px", marginTop: "10px", marginRight: "115px" }}>
    
          <Row xs={1} md={4} className="g-4">
            {dataFilter?.map((item) => {
              return (
                <Col>
                  <Link to={`/detail/${item.id}`} className="text-decoraction-none" style={{textDecoration:"none"}}>
                    <Card style={{border: "none"}}>
                      <Card.Img variant="top" src={jurnal} style={{height: "350px", borderRadius: "10px"}} />
                      <Card.Body style={{ backgroundColor: "black"}}>
                        <Card.Title style={{ backgroundColor: "black", color: "white"}}>{item.title}</Card.Title>
                        <Card.Text style={{ color: "white"}}>
                            <Row>
                            <Col>{item.author}</Col>
                            <Col>{item.publicationdate}</Col>
                            </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
            </Row>
  
      </CardGroup>
    </>
  );
}

export default Searchresault;
