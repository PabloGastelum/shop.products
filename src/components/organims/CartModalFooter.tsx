import { useCartModal } from "../../context/CartModalContext";
import { ModalButton } from "../molecules";

const CartModalFooter = () => {
  const { closeCartModal } = useCartModal();
  return (
    <div className="d-flex justify-content-between">
      <ModalButton
        onClick={closeCartModal}
        label={"Cerrar"}
        className="btn btn-outline-secondary"
      />
      <ModalButton
        label={"Enviar pedido"}
        type="submit"
        className="btn btn-primary"
      />
    </div>
  );
};

export default CartModalFooter;
