import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { CartModalProvider } from "./context/CartModalContext.tsx";
import { OrdersModalProvider } from "./context/OrdersModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <CartModalProvider>
        <OrdersModalProvider>
          <App />
        </OrdersModalProvider>
      </CartModalProvider>
    </CartProvider>
  </StrictMode>
);
