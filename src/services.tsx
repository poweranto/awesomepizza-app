import {Order, Pizza} from "./types.tsx";

const BASE_API_URL = "http://awesomepizza.demo.localhost/api";

export async function fetchPizzas(): Promise<Pizza[]> {
    const response = await fetch(`${BASE_API_URL}/pizzas`);
    if (!response.ok) {
      throw new Error(`Si è verificato un errore: ${response.status}`);
    }
    return await response.json();
}

export async function fetchOrders(): Promise<Order[]> {
  const response = await fetch(`${BASE_API_URL}/orders`);
  return await response.json();
  //setOrders(result);
}

export async function saveOrder(pizzaId: number): Promise<Order> {
  const response = await fetch(`${BASE_API_URL}/pizza/${pizzaId}`, {
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Si è verificato un errore: ${response.status}`);
  }
  return await response.json();
}