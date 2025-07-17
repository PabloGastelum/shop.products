const API_URL = process.env.VITE_API_URL || "http://localhost:3000";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    return await response.json();
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
