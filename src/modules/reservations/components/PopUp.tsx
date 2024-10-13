import type { Asiento } from "@reservations/constants/reservasTypes";

interface PopUpProps {
  variant?: "delete";
  asiento: Asiento;
  onAction: () => void;
}
export default function PopUp({ asiento, onAction, variant }: PopUpProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {variant === "delete" ? "Eliminar" : "Reservar"} Asiento
      </h2>
      <p>
        {variant === "delete"
          ? "¿Estás seguro de que quieres eliminar el asiento "
          : asiento.ocupado
            ? "¿Desea quitar la reserva del asiento "
            : "¿Desea reservar el asiento "}
        {asiento?.asiento}?
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onAction()}
          className={`${variant === "delete" ? "bg-red-500 hover:bg-red-700" : "bg-gray-500 hover:bg-gray-700"} text-white font-bold py-2 px-4 rounded`}
        >
          {variant === "delete"
            ? "Eliminar"
            : asiento.ocupado
              ? "Quitar Reserva"
              : "Reservar"}
        </button>
      </div>
    </div>
  );
}
