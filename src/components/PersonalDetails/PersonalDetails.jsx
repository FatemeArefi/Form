import React from "react";
import { useParams } from "react-router-dom";
import "./PersonalDetails.css";

const PersonDetails = ({ people }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) return <div>Person not found.</div>;

  return (
    <div className="person-details">
      <h2>{person.name}</h2>
      <p>
        <strong>Role:</strong> {person.role}
      </p>
      <p>
        <strong>Birth Date:</strong> {person.birthDate}
      </p>
      <p>
        <strong>Skills:</strong> {person.skills.join(", ")}
      </p>
    </div>
  );
};

export default PersonDetails;
