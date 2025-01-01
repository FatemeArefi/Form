import React, { useState, useEffect } from "react";
import { calculateAge } from "../../utils/calculateAge";
import "./PersonalInfoForm.css";

const PersonalInfoForm = ({ person, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: person.name,
    role: person.role,
    birthDate: person.birthDate,
    skills: person.skills,
  });
  const [age, setAge] = useState(calculateAge(person.birthDate));

  useEffect(() => {
    setAge(calculateAge(formData.birthDate));
  }, [formData.birthDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: person.id });
  };

  return (
    <form className="personal-info-form" onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
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
            <td>{age}</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>
              <input
                type="text"
                name="skills"
                value={formData.skills.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: e.target.value
                      .split(",")
                      .map((skill) => skill.trim()),
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
