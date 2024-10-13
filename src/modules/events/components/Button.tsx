import Delete from "components/icons/Delete";
import Edit from "components/icons/Edit";
import Plus from "components/icons/Plus";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "create" | "edit" | "delete";
  isButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  isButton,
}) => {
  const isCard = variant ? false : true;
  const getButtonStyle = () => {
    switch (variant) {
      case "create":
        return "bg-green-500 hover:bg-green-600 rounded-full";
      case "edit":
        return "bg-blue-500 hover:bg-blue-600";
      case "delete":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "create":
        return <Plus className="w-4 h-4" />;
      case "edit":
        return <Edit className="w-4 h-4" />;
      case "delete":
        return <Delete className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className={
        isCard && !isButton
          ? ""
          : `${getButtonStyle()}  text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2`
      }
    >
      {!isCard && getIcon()}
      {children}
    </button>
  );
};
