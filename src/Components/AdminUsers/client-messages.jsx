import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './client-messages.css';
import swal from 'sweetalert';

function ContactTable() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
            setIsLoading(true);
      const response = await axios.get('http://localhost:5000/api/contact/getAll');
      setContacts(response.data);
            setIsLoading(false);

    }
    fetchData();
  }, []);

  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = (id) => {
    setSelectedContact(id); // set the selected contact id
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact.",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5000/api/contact/delete/${id}`)
          .then(response => {
            if (response.data.success) {
              setContacts(contacts.filter(item => item._id !== id)); // update the state
              setSelectedContact(null); // reset the selected contact id
            } else {
              console.log("Failed to delete contact.");
              setSelectedContact(null); // reset the selected contact id
            }
          })
          .catch(error => {
            console.log(error);
            setSelectedContact(null); // reset the selected contact id
          });
      } else {
        setSelectedContact(null); // reset the selected contact id
      }
    });
  }

  return (
    <div className="my-table-container">
      <table className="my-table">
        <thead>
          <h1> Client Messages</h1>
          <br/>
          <tr>
            <th className="my-table-header">Name</th>
            <th className="my-table-header">Email</th>
            <th className="my-table-header">Phone Number</th>
            <th className="my-table-header">Message</th>
            <th className="my-table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id} className={`my-table-row${selectedContact === contact._id ? " deleting" : ""}`}>
              <td className="my-table-data">{contact.name}</td>
              <td className="my-table-data">{contact.email}</td>
              <td className="my-table-data">{contact.phoneNumber}</td>
              <td className="my-table-data">{contact.message}</td>
              <td className="my-table-data">
                <button
                  className="delete-button"
                  onClick={() => handleDelete(contact._id)}
                  disabled={selectedContact === contact._id}
                >
                  {selectedContact === contact._id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;