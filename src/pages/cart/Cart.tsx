import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import Product from "../../common/ui/Product";
import Typography from "../../common/ui/atom/Typography";

export default function Cart() {
  const { app } = useContext(AppContext);

  if (!app.cartItems.length) {
    // heart-off
    return (
      <section
        className="flex items-center justify-center mt-52 text-center"
        data-testid="empty-cart-section"
      >
        <Typography text="empty_cart" variant="xl"></Typography>
      </section>
    );
  }

  return (
    <section
      className="py-20 px-10 lg:px-12 xl:px-20 2xl:px-44"
      data-testid="cart-section"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {app.cartItems?.map((cartItem) => {
          return (
            <Product article={cartItem} key={`wish-list-${cartItem.name}`} />
          );
        })}
      </div>
    </section>
  );
}
