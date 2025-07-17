import { useCart } from "../../context/CartContext";
import type { Product } from "../../models/products";

type Props = {
  product: Product;
};

const CartProductListItem = ({ product }: Props) => {
  const { image, name, price, id } = product;
  const { removeFromCart } = useCart();

  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <img
        src={image}
        alt={name}
        style={{
          width: 40,
          height: 40,
          objectFit: "contain",
          borderRadius: 8,
          background: "#fff",
        }}
      />
      <span className="flex-grow-1">{name}</span>
      <span className="flex-grow-1">{price}</span>
      <button
        className="btn btn-sm btn-danger ms-2"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </button>
    </li>
  );
};

export default CartProductListItem;
