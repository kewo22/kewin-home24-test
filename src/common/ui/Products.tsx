import React, { useContext } from "react";
import { Heart } from "lucide-react";

import Button from "./atom/Button";
import { Article } from "../interfaces/article";
import { AppContext } from "../../context/AppContext";

interface ArticleProps {
  articles: Article[];
}

export default function Products(props: ArticleProps) {
  const { articles } = props;

  const { app, setApp } = useContext(AppContext);
  console.log("🚀 ~ file: Products.tsx:16 ~ Products ~ app:", app);

  const onHeartClick = (article: Article) => {
    const existingWishlists = [...app.wishList];
    const index = existingWishlists.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });

    if (index === -1) {
      setApp({
        ...app,
        wishList: [...app.wishList, article],
      });
      return;
    }

    existingWishlists.splice(index, 1);
    setApp({
      ...app,
      wishList: existingWishlists,
    });
  };

  const checkIfIsAddedToWishlist = (article: Article) => {
    const existingWishlists = [...app.wishList];
    const index = existingWishlists.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });
    return index === -1 ? false : true;
  };

  return (
    <div className="py-20 px-10 lg:px-12 xl:px-20 2xl:px-44 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
      {articles.map((article, i) => {
        const isAddedToWishList = checkIfIsAddedToWishlist(article);
        const heartIconClass = isAddedToWishList ? "text-primary" : "colors.text.primary";

        return (
          <div
            key={`product-${i}`}
            className="shadow-xl flex flex-col items-center gap-5 p-10 relative"
          >
            <button
              className="absolute top-5 right-5"
              onClick={() => {
                onHeartClick(article);
              }}
            >
              <span
                className={`icon-heart text-3xl transition-all ease-in-out duration-200 ${heartIconClass}`}
              ></span>
            </button>
            <img src={article.images[0].path} alt={`img-${article.name}`} />
            <p className="text-lg font-bold">{article.name}</p>
            <span className="block text-base font-bold">
              {article.prices.currency} {article.prices.regular.value}
            </span>
            <Button variant="primary" size="xs">
              Add to cart
            </Button>
          </div>
        );
      })}
    </div>
  );
}
