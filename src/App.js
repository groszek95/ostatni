import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Komponenty/Form";
import Subpage from "./Subpage";
import FormData from "./FormData";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  const handleDelete = (index) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className="bg-yellow-50 bg-size">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Form handleSubmit={handleSubmit} />} />
            <Route
              path="/subpage"
              element={
                <Subpage formData={formData} handleDelete={handleDelete} />
              }
            />
            <Route
              path="/subpage/:id"
              element={<FormData formData={formData} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
