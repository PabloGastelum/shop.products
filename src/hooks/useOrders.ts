import { useState, useEffect } from "react";
import { fetchOrders } from "../services";
import type { Order } from "../models/orders";
import { useOrdersModal } from "../context/OrdersModalContext";

interface UseOrdersResult {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const useOrders = (): UseOrdersResult => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { showOrdersModal } = useOrdersModal();
  const getOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (err: any) {
      setOrders([]);
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showOrdersModal) {
      getOrders();
    }
  }, [showOrdersModal]);

  return { orders, loading, error };
};

export default useOrders;
