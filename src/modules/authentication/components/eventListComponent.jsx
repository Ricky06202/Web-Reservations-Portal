import React, { useState } from "react";
import { eventos } from "@authentication/components/datosPrueba";
import EventElement from "@authentication/components/eventComponent";

export default function EventList() {
  const [buscarEvento, setBuscarEvento] = useState("");

  const busqueda = (event) => {
    setBuscarEvento(event.target.value);
  };

  const filtrarEventos = eventos.filter((evento) =>
    evento.nombre.toLowerCase().includes(buscarEvento.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 justify-center">
      <input
        className="place-self-center m-3 block w-auto p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 "
        type="text"
        placeholder="Buscar evento"
        value={buscarEvento}
        onChange={busqueda}
      />
      <ul className="space-y-4">
        {filtrarEventos.map((datos) => (
          <EventElement key={datos.id} evento={datos} />
        ))}
      </ul>
    </div>
  );
}
