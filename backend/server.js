const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("home page");
});
// Example route to generate random doctors with images
app.get("/api/doctors", (req, res) => {
  const { category } = req.query;
  // Use Faker API or any other data generation method here
  // I use her same img link for all doctors 
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      category: "Cardiologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "10 years",
      charge: "$150",
      place: "City Hospital",
      clinicName: "HeartCare Clinic",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      category: "Cardiologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "8 years",
      charge: "$120",
      place: "Community Medical Center",
      clinicName: "Cardio Wellness Center",
    },
    {
      id: 3,
      name: "Dr. Mark Johnson",
      category: "Dermatologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "12 years",
      charge: "$180",
      place: "SkinCare Clinic",
      clinicName: "Dermatology Specialists",
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      category: "Dermatologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "9 years",
      charge: "$150",
      place: "Beauty & Skin Clinic",
      clinicName: "SkinCare Experts",
    },
    {
      id: 5,
      name: "Dr. Michael White",
      category: "Orthopedic Surgeon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "15 years",
      charge: "$200",
      place: "OrthoCare Hospital",
      clinicName: "Ortho Specialists",
    },
    {
      id: 6,
      name: "Dr. Sarah Brown",
      category: "Orthopedic Surgeon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "13 years",
      charge: "$180",
      place: "Joint & Bone Clinic",
      clinicName: "OrthoCare Center",
    },
    {
      id: 7,
      name: "Dr. Kevin Wilson",
      category: "Pediatrician",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "20 years",
      charge: "$120",
      place: "ChildCare Hospital",
      clinicName: "Pediatric Wellness Clinic",
    },
    {
      id: 8,
      name: "Dr. Laura Jones",
      category: "Pediatrician",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "18 years",
      charge: "$150",
      place: "Family Medical Center",
      clinicName: "KidsCare Clinic",
    },
    {
      id: 9,
      name: "Dr. Christopher Miller",
      category: "Psychiatrist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "15 years",
      charge: "$200",
      place: "MindWell Hospital",
      clinicName: "Psychiatry Specialists",
    },
    {
      id: 10,
      name: "Dr. Jessica Lee",
      category: "Psychiatrist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "12 years",
      charge: "$180",
      place: "MindCare Clinic",
      clinicName: "Psychiatry Wellness Center",
    },
    {
      id: 11,
      name: "Dr. David Garcia",
      category: "Dentist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "10 years",
      charge: "$120",
      place: "Dental Care Clinic",
      clinicName: "Smile Dental Center",
    },
    {
      id: 12,
      name: "Dr. Amy Robinson",
      category: "Dentist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "8 years",
      charge: "$100",
      place: "Perfect Smile Clinic",
      clinicName: "Dental Experts",
    },
    {
      id: 13,
      name: "Dr. Brian Clark",
      category: "General Physician",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "15 years",
      charge: "$150",
      place: "HealthHub Clinic",
      clinicName: "General Health Center",
    },
    {
      id: 14,
      name: "Dr. Karen Taylor",
      category: "General Physician",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "12 years",
      charge: "$130",
      place: "Wellness Medical Center",
      clinicName: "HealthWell Clinic",
    },
    {
      id: 15,
      name: "Dr. Richard Turner",
      category: "Orthopedic Surgeon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcplMEICWqvYVBUqy1KSDW_VCFfK4IDvoXg&usqp=CAU",
      experience: "14 years",
      charge: "$180",
      place: "JointCare Hospital",
      clinicName: "Ortho Wellness Center",
    },
  ];

  if (category) {
    const filteredDoctors = doctors.filter(
      (doctor) => doctor.category === category
    );
    return res.json(filteredDoctors);
  }

  res.json(doctors);
});

// Route to fetch categories
app.get("/api/categories", (req, res) => {
  // Modify this to include your actual categories
  const categories = [
    {
      id: "cardiologist",
      name: "Cardiologist",
      img: "https://koyilihospital.org/public/uploads/2021-07-05/cardiac.jpg",
      p: "Take care of your body.",
    },
    {
      id: "dermatologist",
      name: "Dermatologist",
      img: "https://drspoint.com/assets/img/dermatology1-min.jpg",
      p: "Take care of your body.",
    },
    {
      id: "orthopedic-surgeon",
      name: "Orthopedic Surgeon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDm506d3mTp8ail-24vp3Tfk2e8Mo1FTIvIw&usqp=CAU",
      p: "Take care of your body.",
    },
    {
      id: "pediatrician",
      name: "Pediatrician",
      img: "https://static8.depositphotos.com/1377214/942/i/450/depositphotos_9428763-stock-photo-cheerful-baby-high-five-to.jpg",
      p: "Take care of your body.",
    },
    {
      id: "psychiatrist",
      name: "Psychiatrist",
      img: "https://www.brisbanebulkbillingdoctor.com.au/wp-content/uploads/2022/05/what-is-the-difference-between-a-psychologist-and-psychiatrist.jpg",
      p: "Take care of your body.",
    },
    // Add more categories as needed
  ];

  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
