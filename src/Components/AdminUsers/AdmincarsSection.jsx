import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const AdminCarsScreen = () => {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get("http://localhost:5000/api/cars");
      setCars(data);
    };

    fetchCars();
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/api/cars/${id}`);
      setCars(cars.filter((car) => car._id !== id));
      toast.success("Car deleted successfully!");
    }
  };

  const updateHandler = async (id, updatedCar) => {
    const formData = new FormData();
    formData.append("name", updatedCar.name);
    formData.append("mileage", updatedCar.mileage);
    formData.append("features", updatedCar.features);
    formData.append("price", updatedCar.price);
    formData.append("year", updatedCar.year);
    formData.append("stock", updatedCar.stock);
    formData.append("description", updatedCar.description);
    formData.append("category", updatedCar.category);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    const { data } = await axios.put(
      `http://localhost:5000/api/cars/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setCars(cars.map((car) => (car._id === id ? { ...data } : { ...car })));
    setEditingCar(null);
    setSelectedFile(null);
    toast.success("Car updated successfully!");
  };

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  const handleCancel = () => {
    setEditingCar(null);
    setSelectedFile(null);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      setSelectedFile(event.target.files[0]);
    } else {
      setEditingCar((prevEditingCar) => ({
        ...prevEditingCar,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <ToastContainer />

      <Link
        className="btn btn-dark my-3"
        to="/"
        style={{ width: "150px", whiteSpace: "nowrap", float: "left" }}
      >
        Go Back
      </Link>
      <h1>Cars</h1>

      <Link
        className="btn btn-dark my-3"
        to="/Admin/newcar"
        style={{
          width: "170px",
          whiteSpace: "nowrap",
          float: "right",
          backgroundColor: "red",
          color: "#fff",
        }}
      >
        Create New Car
      </Link>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Image</th>

            <th>Name</th>
            <th>Mileage</th>
            <th>Price</th>
            <th>Year</th>
            <th>Stock</th>
            <th>Features</th>
            <th>Description</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ borderBottom: "1px solid black" }}>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <div>
                    <input type="file" onChange={handleInputChange} />
                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                    {!selectedFile && (
                      <img src={car.url} alt={car.image} width="100" />
                    )}
                  </div>
                ) : (
                  <img src={car.url} alt={car.image} width="100" />
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={editingCar.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.name
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter mileage"
                    name="mileage"
                    value={editingCar.mileage}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.mileage
                )}
              </td>

              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter price"
                    name="price"
                    value={editingCar.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.price
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter year"
                    name="year"
                    value={editingCar.year}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.year
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    as="select"
                    value={editingCar.stock}
                    name="stock"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="IN STOCK">IN STOCK</option>
                    <option value="OUT OF STOCK">OUT OF STOCK</option>
                  </Form.Control>
                ) : (
                  car.stock
                )}
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter features"
                    name="features"
                    value={editingCar.features}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.features
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={editingCar.description}
                    onChange={handleInputChange}
                  />
                ) : (
                  car.description
                )}
              </td>
              <td>
                {editingCar && editingCar._id === car._id ? (
                  <Form.Control
                    as="select"
                    value={editingCar.category}
                    name="category"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="BMW">BMW</option>
                    <option value="MERCEDES">MERCEDES</option>
                    <option value="TOYOTA">TOYOTA</option>
                    <option value="ELECTRIC CAR">ELECTRIC CAR</option>
                  </Form.Control>
                ) : (
                  car.category
                )}
              </td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {editingCar && editingCar._id === car._id ? (
                  <>
                    <Button
                      variant="success"
                      className="btn-sm mr-2"
                      onClick={() => updateHandler(car._id, editingCar)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="light"
                      className="btn-sm"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      className="btn-sm mr-2"
                      onClick={() => handleEdit(car)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(car._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AdminCarsScreen;
