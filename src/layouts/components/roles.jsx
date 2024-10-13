import React from "react";

export default function RolesComponente({
  nombre,
  rol,
  imagen,
  textoImagen,
  colorTexto,
}) {
  return (
    <div className="flex flex-auto border border-black p-1.5 w-max">
      <div className="grid grid-cols-1">
        <span className="font-extrabold">{nombre}</span>
        <p className="font-extrabold" style={{ color: colorTexto }}>
          {rol}
        </p>
      </div>
      <div>
        <img src={imagen} className="w-16 h-16 ml-2" />
        <span>{textoImagen}</span>
      </div>
    </div>
  );
}
