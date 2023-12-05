import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import ErrorPage from "./error-page";
import Root from "./common/ui/layout/Root";
import AppProvider from "./context/AppContext";

const apolloClient = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary fallback={<p>Error occurred.</p>}> */}
    <AppProvider>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AppProvider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById("root")
);
