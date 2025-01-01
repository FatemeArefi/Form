import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonDetails from "./components/PersonalDetails/PersonalDetails";
import Dashboard from "./components/Dashboard/Dashboard";

const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Engineer",
    birthDate: "1990-01-01",
    skills: ["Digital marketing expert ,", "Graphic design"],
  },
  {
    id: 2,
    name: "Jane Smith",
    skills: [
      "Data analysis skills ,",
      "Project management ,",
      "Front-End Development",
    ],
    role: "Designer",
    birthDate: "1985-05-15",
  },
  {
    id: 3,
    name: "Oliver Smith",
    skills: [
      "Digital marketing expert ,",
      "Graphic design ,",
      "Mobile App Development",
    ],
    role: "Network Administrator",
    birthDate: "1993-11-01",
  },
  {
    id: 4,
    name: "Amelia Johnson",
    skills: ["Graphic design ,", "Mobile App Development"],
    role: "Database Administrator",
    birthDate: "1995-12-01",
  },
  {
    id: 5,
    name: "Ethan Williams",
    skills: ["Graphic design ,", "Front-End Development"],
    role: "Business Analyst",
    birthDate: "1994-07-01",
  },
  {
    id: 6,
    name: "Sophia Brown",
    skills: [
      "Digital marketing expert ,",
      "Graphic design ,",
      "Front-End Development",
    ],
    role: "System Architect",
    birthDate: "1998-09-01",
  },
  {
    id: 7,
    name: "Mason Jones",
    skills: [
      "Digital marketing expert ,",
      "Graphic design ,",
      "Front-End Development",
    ],
    role: "DevOps Engineer",
    birthDate: "1999-11-01",
  },
  {
    id: 8,
    name: "Isabella Garcia",
    skills: [
      "Digital marketing expert ,",
      "Graphic design ,",
      "Front-End Development",
    ],
    role: "Technical Support Specialist",
    birthDate: "1995-07-01",
  },
  {
    id: 9,
    name: "Logan Miller",
    skills: [
      "Digital marketing expert ,",
      "Graphic design",
      "Front-End Development",
    ],
    role: "UX/UI Designer",
    birthDate: "1980-03-01",
  },
];

const allSkills = [
  "Digital marketing expert",
  "Graphic design",
  "Mobile App Development",
  "Database Administrator",
  "Front-End Development",
  "Project management",
];

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/person/:id"
        element={<PersonDetails people={people} allSkills={allSkills} />}
      />
    </Routes>
  </div>
);

export default App;
