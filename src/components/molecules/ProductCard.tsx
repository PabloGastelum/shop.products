import { useEffect, useState } from "react";
import type { Product } from "../../models/products";
import { useCart } from "../../context/CartContext";

type Props = {
  product: Product;
  onPress?: (product: Product) => void;
};

const ProductCard = ({ product, onPress }: Props) => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const isProductInCart = cartItems.some((item) => item.id === product.id);
  
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      className={`card m-2 shadow-lg fade-in border-0 rounded-xl ${
        visible ? "show" : ""
      }`}
      style={{
        width: "16rem",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s",
        background: isDark
          ? "rgba(33, 37, 41, 0.85)"
          : "rgba(52, 58, 64, 0.08)",
        color: isDark ? "#fff" : "#222",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
      }}
    >
      <img
        src={product.image}
        className="card-img-top bg-white rounded-t-xl"
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
          background: "#fff",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold mb-2">{product.name}</h5>
        <p className="card-text mb-1" style={{ fontSize: "0.95rem" }}>
          {product.description}
        </p>
        <p className="card-text mb-3" style={{ fontWeight: 600 }}>
          ${product.price}
        </p>
        <button
          disabled={isProductInCart}
          className="btn w-100 py-2 fw-bold"
          style={{
            background: "blue",
            color: "#fff",
            borderRadius: "0.75rem",
            boxShadow: "0 2px 8px 0 rgba(79,70,229,0.15)",
            border: "none",
            fontSize: "1rem",
            transition: "background 0.2s, transform 0.15s",
          }}
          onClick={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
            setTimeout(() => {
              e.currentTarget.style.transform = "scale(1)";
            }, 120);

            if (onPress) onPress(product);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
