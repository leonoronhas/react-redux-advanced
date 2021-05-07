import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  { id: "p1", price: 6, title: "Book 1", description: "Book 1 description!!" },
  {
    id: "p2",
    price: 12.33,
    title: "Book 2",
    description: "Book 2 description!!",
  },
  { id: "p3", price: 9, title: "Book 3", description: "Book 3 description!!" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
