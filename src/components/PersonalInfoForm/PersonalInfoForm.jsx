import React, { useState, useEffect } from "react";
import "./PersonalInfoForm.css";
import { calculateAge } from "../../utils/calculateAge";

const PersonalInfoForm = ({ person, onSave, onCancel }) => {
  const [formData, setFormData] = useState(person);
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (formData.birthDate) {
      setAge(calculateAge(formData.birthDate));
    }
  }, [formData.birthDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "skills" ? value.split(", ") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="personal-info-form">
      <h2>Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Birth Date:</td>
              <td>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>
                <input type="text" value={age || ""} readOnly />
              </td>
            </tr>
            <tr>
              <td>Skill Set:</td>
              <td>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills.join(", ")}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
