export interface Order {
  client: {
    name: string;
    email: string;
    address: string;
  };
  products: { productId: string; quantity: number }[];
}
