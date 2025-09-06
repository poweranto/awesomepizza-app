import React from 'react';

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
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex justify-center items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow"
        disabled={loading !== undefined && loading !== id}
        onClick={() => onSelect(id)}
      >
        {loading !== undefined && loading === id  && (
          <svg
            className="mr-3 -ml-1 h-5 w-5 animate-spin text-white motion-reduce:hidden"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
        )}
        ordina
      </button>
    </div>
  );
}

export default PizzaCard;