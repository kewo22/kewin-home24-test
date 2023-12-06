import React from "react";

import { Article } from "../interfaces/article";
import Product from "./Product";
import ProductLoader from "./ProductLoader";

interface ProductsProps {
  articles: Article[];
  isLoading: boolean;
}

export default function Products(props: ProductsProps) {
  const { articles, isLoading } = props;

  if (isLoading) {
    return <ProductLoader />
  }

  return (
    <section className="py-20 px-10 lg:px-12 xl:px-20 2xl:px-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {articles.map((article, i) => {
        return <Product article={article} key={`product-${i}`} />;
      })}
    </section>
  );
}
