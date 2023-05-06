import { useState, useEffect } from "react";
import axios from "axios";
import './TestimonialAdmin.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TestimonialAdmin() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const token = sessionStorage.getItem("token");
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  useEffect(() => {
    const fetchAllTestimonial = async () => {
      const res = await axios.get("http://localhost:5000/api/testimonial");
      setTestimonials(res.data.data);
    };
    fetchAllTestimonial();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      // Add validation check
      return;
    }
    await axios.post("http://localhost:5000/api/testimonial/add",{
      headers: {
        "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
      },
    }, {
      name,
      description,
    });

    const newTestimonial = { name, description };
    setName("");
    setDescription("");
    setTestimonials([...testimonials, newTestimonial]);
  };

  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:5000/api/testimonial/${_id}`,{
      headers: {
        "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
      },
    });
    setTestimonials(testimonials.filter((test) => test._id !== _id));
    toast.success("Reservation deleted successfully!");
  };

  const handleEdit = async (e, index) => {
    e.preventDefault();
    const { _id } = testimonials[index];
    await axios.put(`http://localhost:5000/api/testimonial/${_id}`,{
      headers: {
        "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
      },
    } ,{
      name: testimonials[index].name,
      description: testimonials[index].description,
    });
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleEditClick = (e, index) => {
    e.preventDefault();
    setEditIndex(index);

  };

  const handleNameChange = (e, index) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index].name = e.target.value;
    setTestimonials(newTestimonials);
  };

  const handleDescriptionChange = (e, index) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index].description = e.target.value;
    setTestimonials(newTestimonials);
  };
  return (
    <div className="all-testimonials">
                <ToastContainer/>

      <form onSubmit={handleSubmit}>
        <div className="testtoAdd">
          <label>Name:</label>
          <input
            className="testtoAddname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            className="testtoAddDesc"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="admin-testi-buttons" type="submit">
            Add
          </button>
        </div>
        <br></br>
        <br></br>
      </form>

      {testimonials.map((test, index) => (
        <div className="testimonials-view" key={test._id}>
          {editIndex === index ? (
            <form
              className="testimonial-form"
              onSubmit={(e) => handleEdit(e, index)}
            >
              <label> Name:</label>

              <input
                className="testtoAddname"
                type="text"
                value={test.name}
                onChange={(e) => handleNameChange(e, index)}
              />
              <label> Description:</label>
              <textarea
                className="testtoAddDesc"
                type="text"
                value={test.description}
                onChange={(e) => handleDescriptionChange(e, index)}
              />
              <div >
                <button className="deletebtn" type="submit"
                >
                  Save
                </button>
                <button className="editbtn"
               
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="">
                <div className="">
                  <h5>{test.name}</h5>
                  <p>{test.description}</p>
                </div>
                <div>
                  <button className="deletebtn"
                    onClick={() => handleDelete(test._id)}
                  >
                    Delete
                  </button>
                  <button className="editbtn"
                    onClick={(e) => handleEditClick(e, index)}
                    
                  >
                    Edit
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TestimonialAdmin;