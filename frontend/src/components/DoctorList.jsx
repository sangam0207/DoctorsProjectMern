import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DoctorList.css";

const DoctorList = () => {
  const { category } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors based on the selected category
    axios
      .get(`http://localhost:5000/api/doctors?category=${category}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, [category]);

  const handleBookAppointment = (doctorId) => {
    // Handle booking appointment logic
    console.log(`Book appointment for Doctor ID ${doctorId}`);
  };

  return (
    <div className="doctor-list-container">
      <h2 style={{ color: "blue" }}>Doctors List</h2>
      <div className="doctor-cards">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image">
              <img src={doctor.img} alt={doctor.name} />
            </div>
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p>{doctor.category}</p>
              <p>{doctor.experience} of experience</p>
              <p>{doctor.place}</p>
              <p>{doctor.clinicName}</p>
              <p>Charge: {doctor.charge}</p>
              <h4 className="your-style-class"> 👍 100% </h4>
              <Link to="">{doctor.patient}Patient Stories </Link>
            </div>
            <div className="availability">
              <p>🗓️ Available Today</p>
              <button onClick={() => handleBookAppointment(doctor.id)}>
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
