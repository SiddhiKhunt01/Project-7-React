import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";
import PatientView from "./components/PatientView";
import EditPatient from "./components/EditPatient";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PatientForm />} />
          <Route path="/patients" element={<PatientTable />} />
          <Route path="/view/:id" element={<PatientView />} />
          <Route path="/edit/:id" element={<EditPatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
