import { createContext, useContext, useState, type ReactNode } from "react";

interface OrdersModalContextType {
  showOrdersModal: boolean;
  openOrdersModal: () => void;
  closeOrdersModal: () => void;
}

const OrdersModalContext = createContext<OrdersModalContextType | undefined>(
  undefined
);

export const useOrdersModal = () => {
  const context = useContext(OrdersModalContext);
  if (!context) throw new Error("useModal debe usarse dentro de ModalProvider");
  return context;
};

export const OrdersModalProvider = ({ children }: { children: ReactNode }) => {
  const [showOrdersModal, setshowOrdersModal] = useState(false);
  const openOrdersModal = () => setshowOrdersModal(true);
  const closeOrdersModal = () => setshowOrdersModal(false);

  return (
    <OrdersModalContext.Provider
      value={{
        showOrdersModal,
        openOrdersModal,
        closeOrdersModal,
      }}
    >
      {children}
    </OrdersModalContext.Provider>
  );
};
