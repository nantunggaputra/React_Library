import Product from "../Product";
import Products from "../Products";

const eBookData = [
  {
    name: "eBook HTML from Zero to Hero",
    id: 1,
    url: "https://simpleicons.org/icons/html5.svg",
    price: 75000,
    discount: 4,
  },
  {
    name: "eBook CSS from Zero to Hero",
    id: 2,
    url: "https://simpleicons.org/icons/css3.svg",
    price: 90000,
    discount: 20,
  },
  {
    name: "eBook JavaScript from Zero to Hero",
    id: 3,
    url: "https://simpleicons.org/icons/javascript.svg",
    price: 100000,
    discount: 12,
  },
  {
    name: "eBook React from Zero to Hero",
    id: 4,
    url: "https://simpleicons.org/icons/react.svg",
    price: 100000,
  },
];

export default function PDF() {
  const fontTimes = {
    fontFamily: "Helvetica, Arial, 'Times New Roman'",
  };
  return (
    <div className="All-page">
      <h4>Shopping Cart</h4>
      <h6>PDF Front-End Development</h6>
      <Products />
      {eBookData.map((pdf, id) => (
        <div className="product" style={fontTimes} key={pdf.price + pdf.id}>
          <Product
            name={pdf.name}
            url={pdf.url}
            price={pdf.price}
            discount={pdf.discount}
          />
        </div>
      ))}
      {/* <Product
          name="eBook HTML from Zero to Hero"
          url="https://simpleicons.org/icons/html5.svg"
          price="75000"
          discount="4"
        />
        <Product
          name="eBook CSS from Zero to Hero"
          url="https://simpleicons.org/icons/css3.svg"
          price="90000"
          discount="20"
        />
        <Product
          name="eBook JavaScript from Zero to Hero"
          url="https://simpleicons.org/icons/javascript.svg"
          price="100000"
          discount="12"
        />
        <Product
          name="eBook React from Zero to Hero"
          url="https://simpleicons.org/icons/react.svg"
          price="100000"
        /> */}
    </div>
  );
}
