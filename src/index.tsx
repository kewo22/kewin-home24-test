import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
// import ProductList from "./ProductList";
import ErrorPage from "./error-page";
import Fallback from "./error-fallback";
import PLP from "./ProductList";
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
    errorElement: ErrorPage,
    // loader: teamLoader,
    children: [
      {
        path: "/",
        // element: <Child />,
        async lazy() {
          let Home = await import("./pages/home/Home");
          return { Component: Home.default };
        },
      },
      {
        path: "p",
        element: <PLP />,
      },
    ],
  },
]);

// function ErrorBoundary() {
//   // let error = useRouteError();
//   // console.error(error);
//   // Uncaught ReferenceError: path is not defined
//   return <div>Dang!</div>;
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {}}
      resetKeys={["someKey"]}
    > */}
    <AppProvider>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AppProvider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById("root")
);
