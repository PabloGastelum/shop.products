interface Props {
  onClick?: () => void;
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ModalButton = ({ className, label, onClick, type }: Props) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label || "Cerrar"}
    </button>
  );
};

export default ModalButton;
