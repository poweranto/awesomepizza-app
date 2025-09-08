import {Order, Pizza} from "./types.tsx";

const BASE_API_URL = "http://awesomepizza.demo.localhost/api";

export async function fetchPizzas(): Promise<Pizza[]> {
    const response = await fetch(`${BASE_API_URL}/pizzas`);
    if (!response.ok) {
      const result = await response.json();
      throw new Error(`Si è verificato un errore: ${result.detail || result.error}`);
    }
    return await response.json();
}

export async function fetchOrders(): Promise<Order[]> {
  const response = await fetch(`${BASE_API_URL}/orders`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(`Si è verificato un errore: ${result.detail || result.error}`);
  }
  return await response.json();
}

export async function saveOrder(pizzaId: number): Promise<Order> {
  const response = await fetch(`${BASE_API_URL}/orders/pizza/${pizzaId}`, {
    method: "POST"
  });
  if (!response.ok) {
    const result = await response.json();
    throw new Error(`Si è verificato un errore: ${result.detail || result.error}`);
  }
  return await response.json();
}

export async function takeNextOrder(): Promise<Order> {
  const response = await fetch(`${BASE_API_URL}/orders/next`, {
    method: "POST"
  });
  if (!response.ok) {
    const result = await response.json();
    throw new Error(`Si è verificato un errore: ${result.detail || result.error}`);
  }
  return await response.json();
}

export async function completeOrder(orderId: number): Promise<Order> {
  const response = await fetch(`${BASE_API_URL}/orders/${orderId}/complete`, {
    method: "POST"
  });
  if (!response.ok) {
    const result = await response.json()
    throw new Error(`Si è verificato un errore: ${result.detail || result.error}`);
  }
  return await response.json();
}