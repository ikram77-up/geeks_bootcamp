import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.css"
function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    dietary: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    },
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        dietary: {
          ...formData.dietary,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Sample Form</h2>

      <div className="card p-4 mb-4" id="form1">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

     
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </div>
        </div>

     
        <div className="mb-3">
          <select
            className="form-select"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Morocco">Morocco</option>
            <option value="France">France</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Dietary restrictions</label>
          <div>
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.dietary.nutsFree}
              onChange={handleChange}
            />{" "}
            Nuts free
          </div>
          <div>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.dietary.lactoseFree}
              onChange={handleChange}
            />{" "}
            Lactose free
          </div>
          <div>
            <input
              type="checkbox"
              name="vegan"
              checked={formData.dietary.vegan}
              onChange={handleChange}
            />{" "}
            Vegan
          </div>
        </div>
      </div>

      <div className="card p-4" id="form2">
        <h4>Entered information</h4>
        <p><strong>Your Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong> Your Age:</strong> {formData.age}</p>
        <p><strong> Your Gender:</strong> {formData.gender}</p>
        <p><strong> Your Destination:</strong> {formData.destination}</p>

        <p><strong>Dietary restrictions:</strong></p>
        <ul>
          <li>Nuts free: {formData.dietary.nutsFree ? "Yes" : "No"}</li>
          <li>Lactose free: {formData.dietary.lactoseFree ? "Yes" : "No"}</li>
          <li>Vegan: {formData.dietary.vegan ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
