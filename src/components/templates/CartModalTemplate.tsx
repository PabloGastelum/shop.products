import { useCart } from "../../context/CartContext";
import CartProductsList from "../organims/CartProductsList";
import {
  CartModalFooter,
  CartModalForm,
  ModalHeader,
  Modal,
} from "../organims";
import type { Client } from "../../models/clients";
import type { Order } from "../../models/orders";
import { useCreateOrder } from "../../hooks";
import { useCartModal } from "../../context/CartModalContext";

interface Props {
  show: boolean;
}

const CartModal = ({ show }: Props) => {
  const { cartItems, clearCart } = useCart();
  const { closeCartModal } = useCartModal();
  const { createOrder } = useCreateOrder();

  const handleSubmit = async (client: Client) => {
    try {
      const order: Order = {
        client,
        products: cartItems.map(({ id }) => ({
          productId: id,
          quantity: cartItems.find((item) => item.id === id)?.quantity || 1,
        })),
      };

      await createOrder(order);
      clearCart();
      closeCartModal();

      alert("Orden enviada con éxito!");
    } catch (error) {
      console.log(error);
      alert(
        "Ocurrió un error al enviar la orden. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  if (!show) return null;

  return (
    <Modal>
      <ModalHeader title="Carrito de compras" onClose={closeCartModal} />
      <div className="modal-body">
        <CartModalForm handleSubmit={handleSubmit}>
          <CartProductsList products={cartItems} />
          {cartItems.length > 0 && <CartModalFooter />}
        </CartModalForm>
      </div>
    </Modal>
  );
};

export default CartModal;
