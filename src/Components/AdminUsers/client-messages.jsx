import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './client-messages.css';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/getAll');
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <div className="table-container-unique">
      <table className="table-unique">
        <thead>
          <tr>
            <th className="th-unique">ID</th>
            <th className="th-unique">Name</th>
            <th className="th-unique">Email</th>
            <th className="th-unique">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td className="td-unique">{contact.id}</td>
              <td className="td-unique">{contact.name}</td>
              <td className="td-unique">{contact.email}</td>
              <td className="td-unique">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
