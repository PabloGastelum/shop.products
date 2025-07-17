import type { Product } from "../../models/products";
import { ProductCard } from "../molecules";

type Props = {
  onPressProduct?: (product: Product) => void;
  products: Product[];
};

const ProductList = ({ onPressProduct, products }: Props) => (
  <div className="d-flex flex-wrap justify-content-center">
    {products.map((product: Product) => (
      <ProductCard
        key={product.id}
        product={product}
        onPress={onPressProduct}
      />
    ))}
  </div>
);

export default ProductList;
