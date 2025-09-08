import React, {useEffect, useMemo, useState} from 'react';
import {fetchOrders} from "../services.tsx";
import {Order, OrderStatus} from "../types.tsx";
import OrdersTable from "../ui/OrdersTable.tsx";

function Orders(props: any) {
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

  const inProgressOrder = useMemo(function(){
    return orders.find( order => order.status === "IN_PROGRESS");
  }, [orders]);

  return (
    <>
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Elenco ordini</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="bg-white max-h-[610px] overflow-y-auto">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="mt-6">
                {error && (<span className="text-red-500">{error}</span>)}

                <div className="flex flex-wrap gap-4 sm:gap-0 justify-between">
                  <div className="flex gap-2">
                    <span className="font-medium">{orders.length}</span>
                    <span className="font-extralight">ordini</span>
                  </div>

                  <div className="flex gap-2">
                    {inProgressOrder
                      ? (
                        <>
                          <span className="font-extralight">Ordine in preparazione:</span>
                          <span className="font-medium">{inProgressOrder.code}</span>
                        </>
                      ) : <span className="font-extralight">Nessun ordine in preparazione</span>
                    }
                  </div>
                </div>

                <OrdersTable orders={orders} />

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
);
}

export default Orders;