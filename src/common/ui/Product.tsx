import React from "react";
import Button from "./atom/Button";

export default function Product() {
  return (
    <div>
      <img src="./chair.webp" alt="product-chair" height={400} width={400} />
      <p>Tripod Stabilo floor lamp</p>
      <span className="block">899, 99</span>
      <Button variant="primary" size="sm">Add to cart</Button>
    </div>
  );
}
