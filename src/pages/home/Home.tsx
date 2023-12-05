import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import Categories from "../../common/ui/Categories";
import Products from "../../common/ui/Products";

export default function Home() {
  const { app } = useContext(AppContext);

  return (
    <section>
      <Categories />
      {app.articles && <Products articles={app.articles} />}
    </section>
  );
}
