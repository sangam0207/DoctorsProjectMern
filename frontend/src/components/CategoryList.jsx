import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryList.css'; 

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('http://localhost:5000/api/categories', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="category-list-container">
      <h1>Book an appointment for an in-clinic consultation</h1>
      <h4>Find experienced doctors across all specialties</h4>
      <div className="category-cards">
        {categories.map(category => (
          <Link key={category.id} to={`/doctors/${category.name}`} className="category-card-link">
            <div className="category-card">
              <img src={category.img} alt={category.name} />
              <div className="card-content">
                <h3>{category.name}</h3>
                <p>{category.p}</p>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
