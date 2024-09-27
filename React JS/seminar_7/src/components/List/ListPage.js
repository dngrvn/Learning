/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function ListPage({ products }) {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <ul>
        {products.map((product, i) => (
          <NavLink
            key={i}
            style={{ textAlign: "left", fontSize: "24px" }}
            to={`/detail/${i + 1}`}
          >
            <li>{product.name}</li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}
