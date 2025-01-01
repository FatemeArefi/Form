import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PersonalDetails.css";

const PersonDetails = ({ people, allSkills }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === parseInt(id, 10));

  if (!person) return <div>Person not found!</div>;

  const [formData, setFormData] = useState({
    name: person.name,
    role: person.role,
    birthDate: person.birthDate,
    skills: person.skills,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  return (
    <div className="person-details">
      <div className="h">
        <h1>Personal Info</h1>
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />

        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />

        <label htmlFor="skills">Skills:</label>
        <div className="skills-input">
          <select onChange={(e) => handleAddSkill(e.target.value)}>
            <option value="">Select a skill</option>
            {allSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <div className="skills-list">
            {formData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
                <button type="button" onClick={() => handleRemoveSkill(skill)}>
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
      <div className="buttons">
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonDetails;
