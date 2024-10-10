import Armchair from "./icons/Armchair";

interface AsientoCardProps {
  numeroAsiento: number;
  ocupado: boolean;
  nombreReserva?: string;
}

export default function AsientoCard({
  numeroAsiento,
  ocupado,
  nombreReserva = "",
}: AsientoCardProps) {
  return (
    <div
      className={`w-48 rounded-lg shadow-md overflow-hidden ${
        ocupado ? "bg-red-100" : "bg-green-100"
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Armchair
            className={`w-6 h-6 ${ocupado ? "text-red-500" : "text-green-500"}`}
          />
          <span className="text-lg font-bold">Asiento {numeroAsiento}</span>
        </div>
        <div className="text-center flex justify-center items-center gap-4">
          <p
            className={`font-semibold ${
              ocupado ? "text-red-700" : "text-green-700"
            }`}
          >
            {ocupado ? "Ocupado" : "Disponible"}
          </p>
          {ocupado && nombreReserva && (
            <p className=" text-sm text-gray-600">{nombreReserva}</p>
          )}
        </div>
      </div>
    </div>
  );
}
