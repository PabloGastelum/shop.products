interface Props {
  quantity: number;
  onClick: () => void;
}

const CartButton = ({ quantity, onClick }: Props) => {
  return (
    <div onClick={onClick} className="d-flex align-items-center gap-2">
      <span className="position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 6H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 15H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 5l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <span
          className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill"
          style={{ fontSize: "0.8rem" }}
        >
          {quantity}
        </span>
      </span>
    </div>
  );
};

export default CartButton;
