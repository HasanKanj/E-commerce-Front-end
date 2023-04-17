import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Nav, Tab } from "react-bootstrap";


const CarDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [activeKey, setActiveKey] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cars/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleTabClick = (key) => {
    setActiveKey(key);
  };

  

  return (
    <>
      <Link className="btn btn-dark my-3" to="/Cars">
        Go Back
      </Link>
      <Row>
        
        <Col md={6}>
          {product.url && ( // <-- only render Image if product.url exists
            <div >
              <Image
                src={product.url}
                alt={product.name}
                fluid
                style={{ marginBottom: "20px" }}
              />
            </div>
          )}
         
          <Tab.Container id="left-tabs-example" activeKey={activeKey}>
            <Nav variant="tabs" style={{ backgroundColor: "#FAF9F6" }}>
              <Nav.Item>
                <Nav.Link
                  eventKey="description"
                  onClick={() => handleTabClick("description")}
                  style={{
                    backgroundColor:
                      activeKey === "features" ? "#808080" : "#222222",
                    color: "#ffffff",
                  }}
                >
                  Description
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="features"
                  onClick={() => handleTabClick("features")}
                  style={{
                    backgroundColor:
                      activeKey === "description" ? "#808080" : "#222222",
                    color: "#ffffff",
                  }}
                >
                  Features
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <br />
            <Tab.Content>
              <Tab.Pane eventKey="description">
                <p style={{ fontFamily: "Poppins" }}>{product.description}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="features">
                <ul>
                  <li>Features: {product.features}</li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
        <Col md={3}>
          <div style={{ backgroundColor: "#FAF9F6", padding: "20px" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Name: {product.name}</ListGroup.Item>
              <ListGroup.Item>Category: {product.category}</ListGroup.Item>
              <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
              <ListGroup.Item>Year: {product.year}</ListGroup.Item>
              <ListGroup.Item>Mileage: {product.mileage}</ListGroup.Item>
              <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            </ListGroup>
          </div>

          <Button
            variant="danger"
            style={{ borderRadius: "0.5rem", backgroundColor: "#8B0000" }}
            className="btn-block mt-3"
          >
            Reserve Now
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CarDetails;
