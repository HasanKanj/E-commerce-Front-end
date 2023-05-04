import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TestimonialAdmin() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!sessionStorage.getItem("token") && window.location.pathname !== "/") {
      navigate("/");
    } else {
      const fetchAllTestimonial = async () => {
        const res = await axios.get("http://localhost:5000/api/testimonial");
        setTestimonials(res.data.data);
      };
      fetchAllTestimonial();
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      // Add validation check
      return;
    }
    await axios.post("http://localhost:5000/api/testimonial/add", {
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
  };

  const handleEdit = async (e, index) => {
    e.preventDefault();
    const { _id } = testimonials[index];
    await axios.put(`http://localhost:5000/api/testimonial/${_id}`, {
      name: testimonials[index].name,
      description: testimonials[index].description,
    },{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
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
  <div className="card my-3" key={test._id}>
    {editIndex === index ? (
      <form className="card-body" onSubmit={(e) => handleEdit(e, index)}>
        <div className="form-group">
          <label htmlFor={`name-${test._id}`}>Name:</label>
          <input
            className="form-control"
            type="text"
            id={`name-${test._id}`}
            value={test.name}
            onChange={(e) => handleNameChange(e, index)}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`description-${test._id}`}>Description:</label>
          <textarea
            className="form-control"
            id={`description-${test._id}`}
            value={test.description}
            onChange={(e) => handleDescriptionChange(e, index)}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger btn-sm mx-2" type="submit">
            Save
          </button>
          <button
            className="btn btn-secondary btn-sm mx-2"
            type="button"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    ) : (
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{test.name}</h5>
          <div>
            <button
              className="btn btn-danger btn-sm mx-2"
              onClick={() => handleDelete(test._id)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={(e) => handleEditClick(e, index)}
            >
              Edit
            </button>
          </div>
        </div>
        <p>{test.description}</p>
      </div>
    )}
  </div>
))}


    </div>
  );
}

export default TestimonialAdmin;
