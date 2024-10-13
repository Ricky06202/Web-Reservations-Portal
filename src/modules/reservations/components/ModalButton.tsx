import type { Asiento } from "@reservations/constants/reservasTypes";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import PopUp from "./PopUp";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import {
  deleteAsiento,
  getAsientos,
  makeReservation,
  postAsiento,
  putAsiento,
} from "@reservations/services/reservasAPI";
import { useAsientosStore } from "@reservations/stores/asientosStore";

interface ModalButtonProps {
  variant?: "create" | "edit" | "delete";
  asiento?: Asiento;
  children?: React.ReactNode;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  variant,
  asiento,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Asiento>>(asiento || {});
  const [cantidadAsientos, setCantidadAsientos] = useState(1);
  const [tipo, setTipo] = useState<undefined | "create" | "edit" | "delete">(
    variant,
  );
  const setAsientos = useAsientosStore((state) => state.setAsientos);
  const asientos = useAsientosStore((state) => state.asientos);

  useEffect(() => {
    setFormData(asiento || {});
  }, [asientos]);

  const actualizarAsientos = () => {
    getAsientos().then((asientos) => {
      setAsientos(asientos);
    });
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTipo(variant);
    setFormData(asiento || {});
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevosAsientos = [];
    let contador = 0;
    for (let i = 0; i < cantidadAsientos; i++) {
      if (asientos?.find((asiento) => asiento.asiento === contador + 1)) {
        i--;
        contador++;
        continue;
      }

      const nuevoAsiento: Asiento = {
        idEvento: 1,
        idUsuario: 1,
        asiento: contador++ + 1,
        ocupado: false,
      };
      nuevosAsientos.push(postAsiento(nuevoAsiento));
    }
    Promise.all(nuevosAsientos).then(() => {
      actualizarAsientos();
    });
    handleClose();
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    putAsiento(formData as Asiento).then(() => {
      actualizarAsientos();
    });
    handleClose();
  };
  const handleDelete = () => {
    deleteAsiento(asiento!).then(() => {
      actualizarAsientos();
    });
    handleClose();
  };

  const handleReserve = () => {
    makeReservation(formData as Asiento).then(() => {
      actualizarAsientos();
    });
    handleClose();
  };

  const handleChangeTab = (nuevoTipo?: "edit" | "delete") => {
    setTipo(nuevoTipo);
  };

  const renderModalContent = () => {
    switch (tipo) {
      case "create":
        return (
          <CreateForm
            handleSubmit={handleCreate}
            cantidadAsientos={cantidadAsientos}
            setCantidadAsientos={setCantidadAsientos}
          />
        );
      case "edit":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleChangeTab()} isButton>
                Reservar
              </Button>
              <Button
                onClick={() => handleChangeTab("delete")}
                variant="delete"
              >
                Eliminar
              </Button>
            </div>
            <EditForm
              handleSubmit={handleEdit}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        );
      case "delete":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleChangeTab()} isButton>
                Reservar
              </Button>
              <Button onClick={() => handleChangeTab("edit")} variant="edit">
                Editar
              </Button>
            </div>
            <PopUp asiento={asiento!} onAction={handleDelete} variant={tipo} />
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleChangeTab("edit")} variant="edit">
                Editar
              </Button>
              <Button
                onClick={() => handleChangeTab("delete")}
                variant="delete"
              >
                Eliminar
              </Button>
            </div>
            <PopUp asiento={asiento!} onAction={handleReserve} variant={tipo} />
          </div>
        );
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant={variant}>
        {variant === "create"
          ? "Crear"
          : variant === "edit"
            ? "Editar"
            : variant === "delete"
              ? "Eliminar"
              : children}
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {renderModalContent()}
      </Modal>
    </>
  );
};
