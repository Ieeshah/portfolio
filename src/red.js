
import React from "react";
import { useState } from "react";
export default function Product(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
    if (count < 1) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <div className="products">
        {/* <img src={props.img} alt=""/> */}
        <h2>{props.title}</h2>
        <h6>${props.price}</h6>
        <p>{props.desc}</p>
        <p>{count}</p>
        <span onClick={increment}>+</span>
        <button>Buy Now</button>
        <span onClick={decrement}>-</span>
      </div>
    </>
  );
}

// export default Product;
