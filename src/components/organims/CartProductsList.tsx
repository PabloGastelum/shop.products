import type { Product } from "../../models/products";
import { CartProductListItem } from "../molecules";

type Props = {
  products: Product[];
};
const CartProductsList = ({ products }: Props) => {
  if (products.length === 0) {
    return <p className="text-muted">No hay productos en el carrito.</p>;
  }

  return (
    <>
      <ul className="list-group mb-3">
        {products.map((item) => (
          <CartProductListItem key={item.id} product={item} />
        ))}
      </ul>
    </>
  );
};

export default CartProductsList;
