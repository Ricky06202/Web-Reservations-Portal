import type { Evento } from "@events/constants/eventosTypes";

interface PopUpProps {
  variant?: "delete";
  evento: Evento;
  onAction: () => void;
}
export default function PopUp({ evento, onAction, variant }: PopUpProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {variant === "delete" ? "Eliminar" : "Abrir"} Evento
      </h2>
      <p>
        {variant === "delete"
          ? "¿Estás seguro de que quieres eliminar el Evento "
          : "¿Desea Abrir el Evento "}
        {evento.nombre}?
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onAction()}
          className={`${variant === "delete" ? "bg-red-500 hover:bg-red-700" : "bg-gray-500 hover:bg-gray-700"} text-white font-bold py-2 px-4 rounded`}
        >
          {variant === "delete" ? "Eliminar" : "Abrir"}
        </button>
      </div>
    </div>
  );
}
