import type { Asiento } from "@reservations/constants/reservasTypes";
import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import Form from "./Form";
import PopUp from "./PopUp";

interface ModalButtonProps {
  variant?: "create" | "edit" | "delete";
  asiento?: Asiento;
  onAction: (asiento: Partial<Asiento>) => void;
  children?: React.ReactNode;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  variant,
  asiento,
  onAction,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Asiento>>(asiento || {});
  const [tipo, setTipo] = useState<undefined | "create" | "edit" | "delete">(
    variant,
  );

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTipo(variant);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAction(formData);
    handleClose();
  };

  const handlePopUpAction = () => {
    onAction(asiento!);
    handleClose();
  };

  const handleChangeTab = (nuevoTipo?: "edit" | "delete") => {
    setTipo(nuevoTipo);
  };

  const renderModalContent = () => {
    switch (tipo) {
      case "create":
        return (
          <Form
            variant={tipo}
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
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
            <Form
              variant={tipo}
              handleSubmit={handleSubmit}
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
            <PopUp
              asiento={asiento!}
              onAction={handlePopUpAction}
              variant={tipo}
            />
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
            <PopUp
              asiento={asiento!}
              onAction={handlePopUpAction}
              variant={tipo}
            />
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
