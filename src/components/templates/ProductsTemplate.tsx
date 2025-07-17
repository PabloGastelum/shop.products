import { useCart } from "../../context/CartContext";
import { useProducts } from "../../hooks";
import { ErrorAlert, Loading, ProductList } from "../organims";

const ProductsTemplate = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <Loading />;

  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="container py-4 rounded bg-transparent">
      <ProductList products={products} onPressProduct={addToCart} />
    </div>
  );
};

export default ProductsTemplate;
