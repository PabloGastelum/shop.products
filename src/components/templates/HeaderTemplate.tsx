import { useCart } from "../../context/CartContext";
import { useCartModal } from "../../context/CartModalContext";
import { useTheme } from "../../hooks";
import { CartButton } from "../organims";

const HeaderTemplate = () => {
  const { themeClass } = useTheme();
  const { cartItems } = useCart();
  const { openCartModal } = useCartModal();
  return (
    <div
      className={`d-flex align-items-center justify-content-between mb-4 sticky-top ${themeClass}`}
    >
      <h2 className="mb-0">Catálogo de productos</h2>
      <CartButton quantity={cartItems.length} onClick={openCartModal} />
    </div>
  );
};

export default HeaderTemplate;
