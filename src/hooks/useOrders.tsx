import { useEffect, useState } from "react";
import { fetchOrders } from "../services.tsx";

function useOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getOrders() {
      try {
        const result = await fetchOrders();
        setOrders(result ?? []);
      } catch (error) {
        setError((error as Error).message);
      }
    }
    getOrders();
  }, []);

  return { orders, error, setOrders, setError };
}

export default useOrders;