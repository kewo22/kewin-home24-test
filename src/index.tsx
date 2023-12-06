import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";

import "./common/config/i18";
import { apolloClient } from "./common/config/apollo";

import ErrorPage from "./error-page";
import Root from "./common/ui/layout/Root";
import AppProvider from "./context/AppContext";
import ReactErrorBoundary from "./ReactErrorBoundary";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ReactErrorBoundary>
        <Root />
      </ReactErrorBoundary>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        async lazy() {
          let Home = await import("./pages/home/Home");
          return { Component: Home.default };
        },
      },
      {
        path: "/wishlist",
        async lazy() {
          let WishList = await import("./pages/wishlist/Wishlist");
          return { Component: WishList.default };
        },
      },
      {
        path: "/shopping-cart",
        async lazy() {
          let Cart = await import("./pages/cart/Cart");
          return { Component: Cart.default };
        },
      },
    ],
  },
]);

const APP = (
  <React.StrictMode>
    <AppProvider>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AppProvider>
  </React.StrictMode>
);

ReactDOM.render(APP, document.getElementById("root"));
