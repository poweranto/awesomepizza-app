import React from 'react';
import Loading from "./Loading.tsx";

type PizzaCardProps = {
  id: number,
  image: string,
  title: string,
  description: string,
  loading: number | undefined,
  onSelect: (id: number) => void,
}

function PizzaCard({
  id,
  image,
  title,
  description,
  loading,
  onSelect,
}: PizzaCardProps) {
  return (
    <div className="flex flex-col gap-1.5" style={{opacity: loading !== undefined && loading !== id ? .35 : 1}}>
      <div className="group relative flex gap-3 border-2 border-solid rounded-lg border-gray-100 p-2">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="pizza"
          className="aspect-square rounded-md bg-gray-200 object-cover h-32 group-hover:opacity-75 lg:aspect-auto lg:h-32"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg text-sky-700">{title}</h3>
          <span className="mt-1 text-sm font-extralight italic text-gray-500">{description}</span>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex justify-center items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow"
        disabled={loading !== undefined && loading !== id}
        onClick={() => onSelect(id)}
      >
        {loading !== undefined && loading === id  && (
          <Loading />
        )}
        ordina
      </button>
    </div>
  );
}

export default PizzaCard;