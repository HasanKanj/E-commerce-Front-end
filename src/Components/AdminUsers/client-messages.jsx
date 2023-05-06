import React, { useState, useEffect } from "react";
import axios from "axios";
import "./client-messages.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientTable() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  // Define fetchData function outside of useEffect block
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/contact/getAll",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setContacts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("token") && window.location.pathname !== "/") {
      navigate("/");
    }

    fetchData(); // call fetchData here
  }, [navigate]);

  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = (id) => {
    setSelectedContact(id); // set the selected contact id
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact.",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/api/contact/delete/${id}`, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            fetchData(); // call fetchData here
            toast.success("Reservation deleted successfully!"); // <-- show success message

            if (response.data.success) {
              setContacts(contacts.filter((item) => item._id !== id)); // update the state
              setSelectedContact(null); // reset the selected contact id
            } else {
              console.log("Failed to delete contact.");
              setSelectedContact(null); // reset the selected contact id
            }
          })
          .catch((error) => {
            console.log(error);
            setSelectedContact(null); // reset the selected contact id
          });
      } else {
        setSelectedContact(null); // reset the selected contact id
      }
    });
  };
  return (
    <div>
          <ToastContainer/>

      <Link
        className="btn btn-dark my-3"
        to="/ContactUsAdmin"
        style={{
          width: "350px",
          height: "50px",
          whiteSpace: "nowrap",
          fontWeight: "bold",
          fontSize: "25px",
          backgroundColor: "red",
          color: "#fff",
        }}
      >
        Go Back
      </Link>

      <div className="reservation-lina-table-container">
        <h1 className="reservation-lina-title"> Current Client messages: </h1>

        <div className="reservation-lina-table">
          <div className="reservation-lina-table-row reservation-lina-table-header">
            <div className="reservation-lina-table-cell">Name</div>
            <div className="reservation-lina-table-cell">Email</div>
            <div className="reservation-lina-table-cell">Phone Number</div>
            <div className="reservation-lina-table-cell">Message</div>
            <div className="reservation-lina-table-cell">Actions</div>
          </div>

          <div className="reservation-lina-table-body">
            {contacts.map((contact) => (
              <div key={contact._id} className="reservation-lina-table-row">
                <div className="reservation-lina-table-cell">
                  {contact.name}
                </div>
                <div className="reservation-lina-table-cell">
                  {contact.email}
                </div>
                <div className="reservation-lina-table-cell">
                  {contact.phoneNumber}
                </div>
                <div className="reservation-lina-table-cell">
                  {contact.message}
                </div>
                <div className="reservation-lina-table-cell">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientTable;
