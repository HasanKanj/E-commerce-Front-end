import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './client-messages.css';

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

  return (
    <div className="my-table-container">
      <table className="my-table">
        <thead>
          <tr>
            <th className="my-table-header">Name</th>
            <th className="my-table-header">Email</th>
            <th className="my-table-header">Phone Number</th>
            <th className="my-table-header">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id} className="my-table-row">
              <td className="my-table-data">{contact.name}</td>
              <td className="my-table-data">{contact.email}</td>
              <td className="my-table-data">{contact.phoneNumber}</td>
              <td className="my-table-data">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
