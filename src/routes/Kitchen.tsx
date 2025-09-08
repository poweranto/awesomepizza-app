import React, {useMemo, useState} from 'react';
import {completeOrder, takeNextOrder} from "../services.tsx";
import OrdersTable from "../ui/OrdersTable.tsx";
import Loading from "../ui/Loading.tsx";
import useOrders from "../hooks/useOrders.tsx";

function Kitchen(props: any) {

  const [processing, setProcessing] = useState(false);
  const { orders, error, setOrders, setError} = useOrders();

  const inProgressOrder = useMemo(function(){
    return orders.find( order => order.status === "IN_PROGRESS");
  }, [orders]);

  const ordersToProcessExists = useMemo(function(){
    return orders.some( order => order.status === "PENDING");
  }, [orders]);

  async function processOrder() {
    setProcessing(true);
    try {
      const result = await takeNextOrder();
      // update state with in progress order
      const nextOrders = orders.map( order => order.id === result.id
        ? result
        : order
      );
      setOrders(nextOrders);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setProcessing(false);
    }
  }

  async function closeOrder(id: number) {
    setProcessing(true);
    try {
      const result = await completeOrder(id);
      // update state with completed order
      const nextOrders = orders.map( order => order.id === result.id
        ? result
        : order
      );
      setOrders(nextOrders);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setProcessing(false);
    }
  }

  return (
    <>
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cucina</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="bg-white max-h-[610px] overflow-y-auto">
            <div className="mt-6 mb-6">
              {error && (<span className="text-red-500 block">{error}</span>)}

              {inProgressOrder && (
                <button
                  type="button"
                  className="rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow"
                  onClick={() => closeOrder(inProgressOrder.id)}
                  disabled={processing}
                >
                  {processing && <Loading />}
                  completa ordine
                </button>
              )}

              {ordersToProcessExists && !inProgressOrder && (
                <button
                  type="button"
                  className="rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow"
                  onClick={() => processOrder()}
                  disabled={processing}
                >
                  {processing && <Loading />}
                  prendi in carico
                </button>
              )}
            </div>

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
            <OrdersTable orders={orders}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Kitchen;