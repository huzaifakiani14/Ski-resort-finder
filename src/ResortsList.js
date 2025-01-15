import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import Firestore database
import { collection, getDocs } from "firebase/firestore";

const ResortsList = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resorts"));
        const resortsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResorts(resortsData);
      } catch (error) {
        console.error("Error fetching resorts:", error);
      }
    };
    fetchResorts();
  }, []);

  return (
    <div>
      <h2>Resorts List</h2>
      {resorts.length > 0 ? (
        <ul>
          {resorts.map((resort) => (
            <li key={resort.id}>
              {resort.name} - {resort.location} ({resort.snow_conditions})
            </li>
          ))}
        </ul>
      ) : (
        <p>No resorts found or loaded.</p>
      )}
    </div>
  );
};

export default ResortsList;
