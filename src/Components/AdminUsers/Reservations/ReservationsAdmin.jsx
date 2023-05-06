import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReservationsAdmin.css'
const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationsPerPage, setReservationsPerPage] = useState(10);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Reservations",{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setReservations(response.data.reservations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = reservations.slice(indexOfFirstReservation, indexOfLastReservation);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(reservations.length / reservationsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div className="reservation-lina-table-container">
      <h1 className="reservation-lina-title"> Current Reservations: </h1>
      <div className="reservation-lina-table">
        <div className="reservation-lina-table-row reservation-lina-table-header">
          <div className="reservation-lina-table-cell">Car Name</div>
          <div className="reservation-lina-table-cell">Price</div>
          <div className="reservation-lina-table-cell">Email</div>
          <div className="reservation-lina-table-cell">Phone Number</div>
        </div>
        <div className="reservation-lina-table-body">
          {currentReservations.map((reservation) => (
            <div key={reservation._id} className="reservation-lina-table-row">
              <div className="reservation-lina-table-cell">{reservation.carId.name}</div>
              <div className="reservation-lina-table-cell">{reservation.carId.price}</div>
              <div className="reservation-lina-table-cell">{reservation.userId.email}</div>
              <div className="reservation-lina-table-cell">{reservation.userId.phoneNumber}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number} id={number} onClick={handleClick}>
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReservationTable;
