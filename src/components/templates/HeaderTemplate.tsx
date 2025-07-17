import { useCart } from "../../context/CartContext";
import { useCartModal } from "../../context/CartModalContext";
import { useOrdersModal } from "../../context/OrdersModalContext";
import { useTheme } from "../../hooks";
import { CartButton, OrdersButton } from "../organims";

const HeaderTemplate = () => {
  const { themeClass } = useTheme();
  const { cartItems } = useCart();
  const { openCartModal } = useCartModal();
  const { openOrdersModal } = useOrdersModal();
  return (
    <div
      className={`d-flex align-items-center justify-content-between mb-4 sticky-top ${themeClass}`}
    >
      <h2 className="mb-0">Catálogo de productos</h2>
      <OrdersButton onClick={openOrdersModal} />
      <CartButton quantity={cartItems.length} onClick={openCartModal} />
    </div>
  );
};

export default HeaderTemplate;
