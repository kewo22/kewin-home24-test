import React from "react";
import Categories from "../../common/ui/Categories";
import Product from "../../common/ui/Product";

export default function Home() {
  return (
    <div>
      <section>
        <Categories />
        <Product />
      </section>
    </div>
  );
}
