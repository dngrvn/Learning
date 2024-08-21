/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

export default function ProductDetails({ products }) {
  const params = useParams();
  return (
    <>
      {products
        .filter((_, i) => i === +params.productId - 1)
        .map((product, i) => (
          <div className={classes.content} key={i}>
            <p className={classes.text}>{product.name}</p>
            <p className={classes.text}>{product.text}</p>
          </div>
        ))}
    </>
  );
}
