import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import PopUp from "./PopUp";
import type { Evento } from "@events/constants/eventosTypes";
import { useEventosStore } from "@events/stores/eventosStore";
import {
  deleteEvento,
  getEventos,
  postEvento,
  putEvento,
} from "@events/services/eventosAPI";
import Form from "./Form";

interface ModalButtonProps {
  variant?: "create" | "edit" | "delete";
  evento?: Evento;
  children?: React.ReactNode;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  variant,
  evento,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Evento>>(evento || {});
  const [tipo, setTipo] = useState<undefined | "create" | "edit" | "delete">(
    variant,
  );
  const setEventos = useEventosStore((state) => state.setEventos);
  const eventos = useEventosStore((state) => state.eventos);

  useEffect(() => {
    setFormData(evento || {});
  }, [eventos]);

  const actualizarEventos = () => {
    getEventos().then((eventos) => {
      setEventos(eventos);
    });
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTipo(variant);
    setFormData(evento || {});
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    postEvento(formData as Evento).then(() => {
      actualizarEventos();
    });
    handleClose();
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    putEvento(formData as Evento).then(() => {
      actualizarEventos();
    });
    handleClose();
  };
  const handleDelete = () => {
    deleteEvento(evento!).then(() => {
      actualizarEventos();
    });
    handleClose();
  };

  const handleOpenEvento = () => {
    window.location.href = `/eventos/${evento?.id}`;
  };
  const handleChangeTab = (nuevoTipo?: "edit" | "delete") => {
    setTipo(nuevoTipo);
  };

  const renderModalContent = () => {
    switch (tipo) {
      case "create":
        return (
          <Form
            handleSubmit={handleCreate}
            formData={formData}
            setFormData={setFormData}
            variant="create"
          />
        );
      case "edit":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleChangeTab()} isButton>
                Abrir
              </Button>
              <Button
                onClick={() => handleChangeTab("delete")}
                variant="delete"
              >
                Eliminar
              </Button>
            </div>
            <Form
              variant="edit"
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
                Abrir
              </Button>
              <Button onClick={() => handleChangeTab("edit")} variant="edit">
                Editar
              </Button>
            </div>
            <PopUp evento={evento!} onAction={handleDelete} variant={tipo} />
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
              evento={evento!}
              onAction={handleOpenEvento}
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
