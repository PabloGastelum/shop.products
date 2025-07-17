import { useTheme } from "./hooks";
import {
  ProductsTemplate,
  CartModalTemplate,
  HeaderTemplate,
  OrdersModalTemplate,
} from "./components/templates";
import { useCartModal } from "./context/CartModalContext";

function App() {
  const { themeClass } = useTheme();
  const { showCartModal } = useCartModal();

  return (
    <div className={`min-vh-100 w-100 ${themeClass}`}>
      <div className="container py-4 rounded bg-transparent">
        <HeaderTemplate />
        <ProductsTemplate />
        <CartModalTemplate show={showCartModal} />
        <OrdersModalTemplate show={false} />
      </div>
    </div>
  );
}

export default App;
