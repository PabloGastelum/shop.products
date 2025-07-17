import { useTheme } from "./hooks";
import {
  ProductsTemplate,
  CartModalTemplate,
  HeaderTemplate,
  OrdersModalTemplate,
} from "./components/templates";
import { useCartModal } from "./context/CartModalContext";
import { useOrdersModal } from "./context/OrdersModalContext";

function App() {
  const { themeClass } = useTheme();
  const { showCartModal } = useCartModal();
  const { showOrdersModal } = useOrdersModal();

  return (
    <div className={`min-vh-100 w-100 ${themeClass}`}>
      <div className="container py-4 rounded bg-transparent">
        <HeaderTemplate />
        <ProductsTemplate />
        <CartModalTemplate show={showCartModal} />
        <OrdersModalTemplate show={showOrdersModal} />
      </div>
    </div>
  );
}

export default App;
