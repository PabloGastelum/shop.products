import type { Order } from "../models/orders";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getOrders = async () => {
  try {
    const response = await fetch(`${API_URL}/api/orders`);
    if (!response.ok) {
      throw new Error("Error al obtener las órdenes");
    }

    const orders = await response.json();
    return orders as Order[];

    return [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const postOrder = async (order: Order) => {
  try {
    const response = await fetch(`${API_URL}/api/orders/add-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Error al enviar la orden");
    }

    return await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, order });
      }, 1000);
    });
  } catch (error) {
    console.error("Error posting order:", error);
    throw error;
  }
};
