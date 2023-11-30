import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import Categories from "../../common/ui/Categories";
import Products from "../../common/ui/Products";

export default function Home() {
  const { app, setApp } = useContext(AppContext);
  console.log("🚀 ~ file: Home.tsx:9 ~ Home ~ app:", app.articles);

  return (
    <div className="">
      <section>
        <Categories />
        {app.articles && <Products articles={app.articles} />}

        {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {app.articles.map((article, i) => {
            return <Product key={i} article={article} />;
          })}
        </div> */}
      </section>
    </div>
  );
}
