import React from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PersonDetails from "./components/PersonalDetails/PersonalDetails";
import { people } from "./data/people";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/person/:id" element={<PersonDetails people={people} />} />
      </Routes>
    </div>
  );
}

export default App;
