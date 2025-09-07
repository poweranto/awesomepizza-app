import React, {useEffect, useState} from 'react';
import PizzaCard from "../ui/PizzaCard.tsx";
import {Order, Pizza} from "../types.tsx";
import {fetchPizzas, saveOrder} from "../services.tsx";

function Home(props: any) {

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [order, setOrder] = useState<Order>();
  const [error, setError] = useState<string>();
  const [orderSaving, setOrderSaving] = useState<number | undefined>();

  useEffect(() => {
    async function getPizzas() {
      try {
        const result = await fetchPizzas();
        setPizzas(result ?? []);
      } catch (error) {
        setError((error as Error).message);
      }
    }
    getPizzas();
  }, []);

  async function createOrder(pizzaId: number) {
    // we don't want to create an order while another is in process
    if (orderSaving !== undefined) {
      console.log("we don't want to create an order while another is in process");
      return;
    }
    setOrderSaving(pizzaId);
    try {
      const result = await saveOrder(pizzaId);
      setOrder(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setOrderSaving(undefined);
    }
  }

  return (
    <>
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Le nostre pizze</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-8">

              <div className="flex flex-col w-fit justify-between gap-1 mt-6">
                <div className="flex justify-between gap-2">
                  <span className="font-extralight">Il tuo ordine</span>
                  <span className="font-medium">{order?.pizza.name}</span>
                </div>
                <div className="border-b border-solid border-gray-100"></div>
                <div className="flex justify-between gap-2">
                  <span className="font-extralight">Codice</span>
                  <span className="font-medium">{order?.code}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {error && (<span className="text-red-500">{error}</span>)}
                {pizzas.map(pizza => (
                  <PizzaCard
                    key={pizza.id}
                    id={pizza.id}
                    image="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    title={pizza.name}
                    description={pizza.description}
                    loading={orderSaving}
                    onSelect={createOrder}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;