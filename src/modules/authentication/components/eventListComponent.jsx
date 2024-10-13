import React, { useState, useEffect } from "react";
import EventElement from "@authentication/components/eventComponent";

export default function EventList() {
  const [mostrarEvento, setMostrarEvento] = useState([]);
  const [buscarEvento, setBuscarEvento] = useState("");

  const url = "http://127.0.0.1:8000/api/eventos/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMostrarEvento(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (mostrarEvento.length === 0) {
    return <div>Cargando...</div>;
  }

  const busqueda = (event) => {
    setBuscarEvento(event.target.value);
  };

  const filtrarEventos = mostrarEvento.filter((evento) => {
    return evento.name_event.toLowerCase().includes(buscarEvento.toLowerCase());
  });

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
