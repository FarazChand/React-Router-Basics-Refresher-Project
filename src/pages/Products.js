import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Prodcut 1" },
  { id: "p2", title: "Prodcut 2" },
  { id: "p3", title: "Prodcut 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>This Be Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
