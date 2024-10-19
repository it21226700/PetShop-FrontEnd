// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Card from './Card'; // Ensure this path is correct
import { fetchPets, fetchProducts, fetchCustomers } from '../api';
import NavBar from './NavBar'; // Correct path to NavBar
import Footer from './Footer'; // Import Footer
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petsData = await fetchPets();
        const productsData = await fetchProducts();
        const customersData = await fetchCustomers();

        setPets(petsData);
        setProducts(productsData);
        setCustomers(customersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* Include the NavBar component */}
      <NavBar />

      <h1 className="text-2xl font-bold mb-4 text-center">Manito PET store</h1>
    
      {/* Pets Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Take A Look At Some Of Our Pets</h2>
        <div className="d-flex flex-wrap">
          {pets.map((pet) => (
            <Card
              key={pet.id}
              title={pet.name}
              image={pet.image || 'https://via.placeholder.com/150'}
              text={`Breed: ${pet.breed}`}
              details={`Pet details for ${pet.name}`} // Adjust as needed
            />
          ))}
        </div>
        <Button variant="info">See More</Button>{' '}
      </div>
      <br>
      </br>


      {/* Products Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Products</h2>
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              image={product.image || 'https://via.placeholder.com/150'}
              text={product.description}
              details={`Product details for ${product.name}`} // Adjust as needed
            />
          ))}
        </div>
        <Button variant="info">See More</Button>{' '}
      </div>

      {/* Customers Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customers</h2>
        <div className="d-flex flex-wrap">
          {customers.map((customer) => (
            <Card
              key={customer.id}
              title={customer.name}
              image={customer.image || 'https://via.placeholder.com/150'} // Ensure this is valid
              text={`Email: ${customer.email}`}
              details={`Customer details for ${customer.name}`} // Adjust as needed
            />
          ))}
        </div>
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Dashboard;
