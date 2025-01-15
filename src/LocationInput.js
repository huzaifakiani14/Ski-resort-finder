import React, { useState } from "react";

const LocationInput = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${location}`);
    // This is where we'll later integrate the API call to fetch ski resorts
  };

  return (
    <div>
      <h2>Enter Your Location</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city or state"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Find Resorts</button>
      </form>
    </div>
  );
};

export default LocationInput;
