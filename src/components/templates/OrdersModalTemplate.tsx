import { ModalHeader, Modal } from "../organims";
import { useOrdersModal } from "../../context/OrdersModalContext";

interface Props {
  show: boolean;
}

const OrdersModalTemplate = ({ show }: Props) => {
  const { closeOrdersModal } = useOrdersModal();

  if (!show) return null;

  return (
    <Modal>
      <ModalHeader title="Carrito de compras" onClose={closeOrdersModal} />
      <div className="modal-body">
        <h1>test</h1>
      </div>
    </Modal>
  );
};

export default OrdersModalTemplate;
