import './client-messages.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/api/contact/getAll');
      setContacts(response.data);
    }
    fetchData();
  }, []);

  return (
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
         <tr key={contact._id}>
         <td>{contact.name}</td>
         <td>{contact.email}</td>
         <td>{contact.phoneNumber}</td>
         <td>{contact.message}</td>
       </tr>
     ))}
   </tbody>
 </table>
</div>
  );
}

export default ContactTable;
