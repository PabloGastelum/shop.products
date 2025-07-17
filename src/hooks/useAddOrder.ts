import { useState } from "react";
import type { Order } from "../models/orders";
import { postOrder } from "../services";

interface UseOrderResult {
  loading: boolean;
  error: string | null;
  success: boolean;
  createOrder: (order: Order) => Promise<void>;
}

const useCreateOrder = (): UseOrderResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createOrder = async (order: Order) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await postOrder(order);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, createOrder };
};

export default useCreateOrder;
