import { ModalHeader, Modal } from "../organims";
import { useOrdersModal } from "../../context/OrdersModalContext";
import { useOrders } from "../../hooks";

interface Props {
  show: boolean;
}

const OrdersModalTemplate = ({ show }: Props) => {
  const { closeOrdersModal } = useOrdersModal();
  const { orders } = useOrders();
  if (!show) return null;

  return (
    <Modal>
      <ModalHeader title="Carrito de compras" onClose={closeOrdersModal} />
      <ul className="list-group">
        {orders.map((order, index) => (
          <li key={index} className="list-group-item">
            <div>
              <strong>Cliente:</strong> {order.client.name}
            </div>
            <div>
              <strong>Dirección:</strong> {order.client.address}
            </div>
            <div>
              <strong>Productos:</strong> {order.products.length}
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default OrdersModalTemplate;