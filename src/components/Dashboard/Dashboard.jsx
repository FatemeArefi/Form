import React from "react";
import "./Dashboard.css";
import PieChart from "../Chart/PieChart";
import TeamTable from "../TeamTable/TeamTable";
import { people } from "../../data/people";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Skill Mapping Dashboard</h1>
      <PieChart people={people} />
      <TeamTable />
    </div>
  );
};

export default Dashboard;
