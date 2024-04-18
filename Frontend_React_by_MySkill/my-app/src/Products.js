import React from "react";

function PDF(props) {
  return (
    <li>
      <small>eBook {props.product}</small>
    </li>
  );
}
function Products() {
  const products = [
    { id: "i", name: "HTML" },
    { id: "ii", name: "CSS" },
    { id: "iii", name: "JavaScript" },
    { id: "iv", name: "React" },
  ];
  return (
    <>
      <small
        style={{
          color: "#d4d4d4",
          fontWeight: "700",
          textDecoration: "underline",
        }}
      >
        eBook List
      </small>
      <ul style={{ color: "#d4d4d4" }}>
        {products.map((product) => (
          <PDF product={product.name} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export default Products;
