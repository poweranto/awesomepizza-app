import React from 'react';

function Kitchen(props: any) {
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
            <div>Elenco ordini</div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Kitchen;