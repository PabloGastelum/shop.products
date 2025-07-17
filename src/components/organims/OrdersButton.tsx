
interface OrdersButtonProps {
  onClick: () => void;
}

const OrdersButton = ({ onClick }: OrdersButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-outline-primary d-flex align-items-center"
      onClick={onClick}
      aria-label="Ver órdenes"
    >
      {/* W3Schools clipboard icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 .5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V4h-3v-.5zM19 21H5V5h2v2h10V5h2v16z" />
      </svg>
      Ordenes
    </button>
  );
};

export default OrdersButton;
