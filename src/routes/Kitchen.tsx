import React, {useEffect, useState} from 'react';
import {Order} from "../types.tsx";
import {fetchOrders} from "../services.tsx";
import OrdersTable from "../ui/OrdersTable.tsx";

function Kitchen(props: any) {

  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string>();

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

  return (
    <>
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cucina</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="bg-white">
            <OrdersTable orders={orders} />
          </div>
        </div>
      </main>
    </>
  );
}
export default Kitchen;