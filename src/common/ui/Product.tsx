import React, { useContext } from "react";

import { Article } from "../../types";
import Button from "./atom/Button";
import { AppContext } from "../../context/AppContext";

interface ProductProps {
  article: Article;
}

export default function Product(props: ProductProps) {
  const { article } = props;

  const { app, setApp } = useContext(AppContext);

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

  const onAddToCartClick = (article: Article) => {
    const existingCartItems = [...app.cartItems];
    const index = existingCartItems.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });

    if (index === -1) {
      setApp({
        ...app,
        cartItems: [...app.cartItems, article],
      });
      return;
    }

    existingCartItems.splice(index, 1);
    setApp({
      ...app,
      cartItems: existingCartItems,
    });
  };

  const isAddedToWishList = checkIfIsAddedToWishlist(article);
  const heartIconClass = isAddedToWishList
    ? "text-primary"
    : "colors.text.primary";

  return (
    <article
      key={article.name}
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
      <Button
        variant="primary"
        size="xs"
        onClick={() => {
          onAddToCartClick(article);
        }}
      >
        Add to cart
      </Button>
    </article>
  );
}
