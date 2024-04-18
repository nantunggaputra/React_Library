import React from "react";

function Product({ price, name, url, discount }) {
  return (
    <>
      <h5>{name}</h5>
      <img src={url} alt={Math.random()} />
      <br />
      <small>
        {!discount ? (
          <b>Rp. {price}</b>
        ) : (
          <>
            <s>Rp. {price}</s> <span className="discount">(-{discount}%)</span>
          </>
        )}
      </small>
      {!discount ? (
        <></>
      ) : (
        <small>
          <br />
          <b>
            Rp.{" "}
            {parseFloat(price) -
              parseFloat((parseInt(price) * parseInt(discount)) / 100)}
          </b>
        </small>
      )}
    </>
  );
}

export default Product;
