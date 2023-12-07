import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Product from "../../common/ui/Product";
import Typography from "../../common/ui/atom/Typography";

export default function WishList() {
  const { app } = useContext(AppContext);

  if (!app.wishList.length) {
    return (
      <section className="flex items-center justify-center mt-52 text-center">
        <Typography text="empty_wishlist" variant="xl"></Typography>
      </section>
    );
  }

  return (
    <section className="py-20 px-10 lg:px-12 xl:px-20 2xl:px-44">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {app.wishList?.map((wishList) => {
          return (
            <Product article={wishList} key={`wish-list-${wishList.name}`} />
          );
        })}
      </div>
    </section>
  );
}
