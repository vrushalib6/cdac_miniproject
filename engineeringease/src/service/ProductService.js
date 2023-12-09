import axios from "axios";

export const getProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8900/product');
     // const data = await response.json();
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };