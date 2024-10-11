import React from "react";

export default function EventElement({ evento }) {
  return (
    <div className="flex justify-around space-y-4">
      <div className="grid grid-cols-1 gap-3 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 w-auto bg-slate-300">
        <div className="flex">
          <img className="w-8 h-8 mr-2" src="/favicon.svg" />
          <a href="#" className="text-xl font-bold">
            {evento.nombre}
          </a>
        </div>
        <div className="flex flex-row gap-4">
          <p className="text-gray-700">Fecha: {evento.fecha}</p>
          <p className="text-gray-700">
            Cantidad de asientos: {evento.cantidad_puestos}
          </p>
        </div>
      </div>
    </div>
  );
}
