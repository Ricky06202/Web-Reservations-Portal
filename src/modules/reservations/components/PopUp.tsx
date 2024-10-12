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
          : "¿Desea reservar el asiento "}
        {asiento?.asiento}?
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onAction()}
          className={`${variant === "delete" ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded`}
        >
          {variant === "delete" ? "Eliminar" : "Reservar"}
        </button>
      </div>
    </div>
  );
}
