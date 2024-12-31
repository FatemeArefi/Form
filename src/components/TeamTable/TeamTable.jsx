import React, { useState } from "react";
import "./TeamTable.css";
import { people as initialPeople } from "../../data/people";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import { Link } from "react-router-dom";

const TeamTable = () => {
  const [people, setPeople] = useState(initialPeople);
  const [editingPerson, setEditingPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    setEditingPerson(null);
  };

  const handleEdit = (person) => {
    setEditingPerson(person);
  };

  const handleSave = (updatedPerson) => {
    setPeople(
      people.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
    setEditingPerson(null);
  };

  const handleAdd = () => {
    const newPerson = {
      id: people.length + 1,
      name: "",
      role: "",
      birthDate: "",
      skills: [],
    };
    setPeople([...people, newPerson]);
    setEditingPerson(newPerson);
  };

  const handleCancel = () => {
    setEditingPerson(null);
  };

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="team-table">
      <h2>Team Members</h2>
      <div className="actions">
        <button className="create" onClick={handleAdd}>
          Create
        </button>
        <input
          className="actions"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Birth Date</th>
            <th>Skills</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person) => (
            <tr key={person.id}>
              <td>
                <Link to={`/person/${person.id}`}>{person.name}</Link>
              </td>
              <td>{person.role}</td>
              <td>{person.birthDate}</td>
              <td>
                {person.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </td>

              <td>
                <button onClick={() => handleEdit(person)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000000"
                  >
                    <path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(person.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000000"
                  >
                    <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingPerson && (
        <PersonalInfoForm
          person={editingPerson}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default TeamTable;
