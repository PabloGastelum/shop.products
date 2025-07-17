import { createContext, useContext, useState, type ReactNode } from "react";

interface CartModalContextType {
  showCartModal: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
}

const CartModalContext = createContext<CartModalContextType | undefined>(
  undefined
);

export const useCartModal = () => {
  const context = useContext(CartModalContext);
  if (!context) throw new Error("useModal debe usarse dentro de ModalProvider");
  return context;
};

export const CartModalProvider = ({ children }: { children: ReactNode }) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const openCartModal = () => setShowCartModal(true);
  const closeCartModal = () => setShowCartModal(false);

  return (
    <CartModalContext.Provider
      value={{
        showCartModal,
        openCartModal,
        closeCartModal,
      }}
    >
      {children}
    </CartModalContext.Provider>
  );
};
