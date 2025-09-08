import React from 'react';
import {Order} from "../types.tsx";

type OrdersTableProps = {
  orders: Order[],
}

function OrdersTable({
 orders
}: OrdersTableProps) {
  return (
    <table className="w-full mt-6 text-left table-fixed min-w-max">
      <thead className="sticky top-0">
      <tr className="border-b border-gray-300 bg-gray-50 font-bold text-sky-700">
        <th className="p-4">
          <p className="block font-sans antialiased font-normal">Pizza</p>
        </th>
        <th className="p-4">
          <p className="block font-sans antialiased font-normal">Codice</p>
        </th>
        <th className="p-4">
          <p className="block font-sans antialiased font-normal">Data</p>
        </th>
        <th className="p-4">
          <p className="block font-sans antialiased font-normal">Stato</p>
        </th>
      </tr>
      </thead>
      <tbody>
      {orders.map(order => (
        <tr key={order.id} className="border-b border-gray-200">
          <td className="p-4">
            <p className="block font-sans text-sm antialiased font-normal">{order.pizza.name}</p>
          </td>
          <td className="p-4">
            <p
              className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{order.code}</p>
          </td>
          <td className="p-4">
            <p
              className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{order.createdAt}</p>
          </td>
          <td className="p-4">
            <p
              className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{order.status}</p>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;