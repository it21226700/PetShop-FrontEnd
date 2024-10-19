const API_BASE_URL = 'https://monitor-backend-rust.vercel.app/api';

export const fetchPets = async () => {
  const response = await fetch(`${API_BASE_URL}/pets`);
  if (!response.ok) throw new Error('Failed to fetch pets');
  return response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const fetchCustomers = async () => {
  const response = await fetch(`${API_BASE_URL}/customers`);
  if (!response.ok) throw new Error('Failed to fetch customers');
  return response.json();
};
