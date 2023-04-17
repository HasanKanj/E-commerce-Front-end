import React, { useState, useEffect } from "react";
import { Row, Col, Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image } from "cloudinary-react";
// import './Cars.css'
const CarsScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("BMW");

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:5000/api/cars/";
      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }
      const { data } = await axios.get(url);
      setProducts(data);
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <>
<h1 style={{borderBottom: '3px solid #8B0000', width: '30%', marginBottom: '50px'}}>Featured Cars</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <h1>{selectedCategory}</h1>
  <nav className="navbar-expand-lg navbar-light ">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex' }}>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'BMW' ? ' active' : ''}`} onClick={() => setSelectedCategory('BMW')} style={{ cursor: 'pointer', color: selectedCategory === 'BMW' ? '#8B0000' : 'black' }}>BMW</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'MERCEDES' ? ' active' : ''}`} onClick={() => setSelectedCategory('MERCEDES')} style={{ cursor: 'pointer', color: selectedCategory === 'MERCEDES' ? '#8B0000' : 'black' }}>Mercedes</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'TOYOTA' ? ' active' : ''}`} onClick={() => setSelectedCategory('TOYOTA')} style={{ cursor: 'pointer', color: selectedCategory === 'TOYOTA' ? '#8B0000' : 'black' }}>Toyota</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'ELECTRIC CAR' ? ' active' : ''}`} onClick={() => setSelectedCategory('ELECTRIC CAR')} style={{ cursor: 'pointer', color: selectedCategory === 'ELECTRIC CAR' ? '#8B0000' : 'black' }}>Electric Car</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'GMC' ? ' active' : ''}`} onClick={() => setSelectedCategory('GMC')} style={{ cursor: 'pointer', color: selectedCategory === 'GMC' ? '#8B0000' : 'black' }}>GMC</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'FORD' ? ' active' : ''}`} onClick={() => setSelectedCategory('FORD')} style={{ cursor: 'pointer', color: selectedCategory === 'FORD' ? '#8B0000' : 'black' }}>Ford</span>
      </li>
      <li className="nav-item">
        <span className={`nav-link${selectedCategory === 'AUDI' ? ' active' : ''}`} onClick={() => setSelectedCategory('AUDI')} style={{ cursor: 'pointer', color: selectedCategory === 'AUDI' ? '#8B0000' : 'black' }}>Audi</span>
      </li>
    </ul>
  </nav>
</div>

<Row>
  {products.map((product) => (
    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
<Card className="my-3 p-3 rounded" style={{backgroundColor: '#FAF9F6'}}>
        <Link to={`/product/${product._id}`}>
          <div className="card-image-container">
            <Image
              cloudName="dxe8xonxx"
              publicId={product.public_id}
              secure="true"
            />
          </div>
        </Link>
        <Card.Body className="text-center"> {/* added the 'text-center' class */}
          {/* <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>Name:{product.name}</strong>
            </Card.Title>
          </Link> */}
          <Card.Text as="h4">Price:{product.price}</Card.Text>
          <Card.Text as="h4">Year:{product.year}</Card.Text>
          <Card.Text as="h4">category:{product.category}</Card.Text>
          <Link to={`/product/${product._id}`}>
          <Button variant="primary" style={{marginTop: '30px', borderRadius: '0.5rem', backgroundColor: '#8B0000'}}>See More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </>
  );
};

export default CarsScreen;
