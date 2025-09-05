import { useEffect, useState } from 'react'
import './index.css'
import { Pizza, Order } from "./types";

function App() {
  const [count, setCount] = useState(0);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  async function getPizzas() {
    const response = await fetch('http://awesomepizza.demo.localhost/api/pizzas');
    const result: Pizza[] = await response.json();
    
    setPizzas(result);
  }

  async function getOrders() {
    const response = await fetch('http://awesomepizza.demo.localhost/api/orders');
    const result: Order[] = await response.json();

    setOrders(result);
  }

  useEffect(() => {
    getPizzas();
    getOrders();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Awesome Pizza
      </h1>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <p>{order.code}</p>
            <p>{order.pizza.name}</p>
            <p>{order.createdAt}</p>
            <hr/>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        {pizzas.map(pizza => (
          <div key={pizza.id}>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <hr/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
