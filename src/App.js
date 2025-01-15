import React from "react";
import Auth from "./Auth"; // Updated path for Auth.js
import ResortsList from "./ResortsList"; // Updated path for ResortsList.js
import "./App.css";
import LocationInput from "./LocationInput";
const App = () => {
  return (
    <div>
      <h1>Ski Resort Finder</h1>
      <LocationInput />
      {/* Authentication Component */}
      <Auth />
      {/* Resorts List Component */}
      <ResortsList />
    </div>
  );
};

export default App;
