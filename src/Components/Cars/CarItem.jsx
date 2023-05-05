import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";
import { Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  RemixIcon,
  riCarLine,
  riSettings2Line,
  riTimerFlashLine,
} from "@mwarnerdotme/react-remixicon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import emailjs from "emailjs-com";
import "../styles/car-item.css";
import ProgressCircle from "../Home/ProgressCircle";

const CarItem = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const toggleModal = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("Please login/register before reserving a car.");
      return;
    }

    setModalIsOpen(!modalIsOpen);
  };

  const reserveCar = (carId, carName) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("Please login/register before reserving a car.");
      return;
    }

    setLoading(true);
    axios
      .post(
        "http://localhost:5000/api/Reservations/",
        { carId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const params = {
          car_id: carId,
        };

        emailjs
          .send(
            "service_i65z4yo",
            "template_kz0prl9",
            params,
            "X3GWKBc5fNzTxb_rm"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        setLoading(false);
        toggleModal();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? ( // <-- Render ProgressCircle when loading is true
        <ProgressCircle />
      ) : (
        <div>
          <ToastContainer className="toast-container" />

          <h1
            className="section__title mb-5"
            style={{ borderBottom: "solid 5px red" }}
          >
            {" "}
          </h1>
{filteredProducts.map((product) => (
  <Col lg="4" md="4" sm="6" key={product._id} className="mb-5">
    <div className="cars__screen">
      <div className="car__item">
        <div className="car__img">
          <Image
            cloudName="dxe8xonxx"
            publicId={product.public_id}
            secure="true"
          />
        </div>

        <div className="car__item-content mt-4">
          <h6
            className="section__title text-center"
            style={{ color: "#dc3545", whiteSpace: "nowrap" }}
          >
            {product.name}
          </h6>
          <h5
            className="rent__price text-center mt-"
            style={{ color: "#dc3545" }}
          >
            {product.price}
          </h5>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <RemixIcon icon={riCarLine} size="1x" color="#dc3545" />{" "}
              {product.category}
            </span>
            <span className="d-flex align-items-center gap-1">
              <RemixIcon
                icon={riSettings2Line}
                size="1x"
                color="#dc3545"
              />
              {product.features}
            </span>
            <span className="d-flex align-items-center gap-1">
              <RemixIcon
                icon={riTimerFlashLine}
                size="1x"
                color="#dc3545"
              />
              {product.mileage}
            </span>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="w-50 car__item-btn car__btn-details"
              style={{ borderRadius: "40px" }}
            >
              <Link to={`/product/${product.name}`}>See Details</Link>
            </button>
            <button
              className="w-50 car__item-btn car__btn-rent"
              style={{ borderRadius: "40px", marginLeft: "10px" }}
              onClick={toggleModal} // <-- Open modal on button click
            >
              <strong>Reserve</strong>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Popup Modal */}
    <Modal isOpen={modalIsOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Confirm Reservation</ModalHeader>
      <ModalBody>Are you sure you want to reserve this car?</ModalBody>
      <ModalFooter>
        <button
          className="btn btn-danger"
          onClick={() => {
            reserveCar(product._id,);
          }}
        >
          Yes
        </button>
        <button className="btn btn-secondary" onClick={toggleModal}>
          No
        </button>
      </ModalFooter>
    </Modal>
  </Col>
))}     </div>)}

    </>
  )
};

export default CarItem;