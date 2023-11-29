import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
// import ProductList from "./ProductList";
import ErrorPage from "./error-page";
import Fallback from "./error-fallback";
import PLP from "./ProductList";
import Root from "./common/ui/layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: ErrorPage,
    // loader: teamLoader,
    children: [
      {
        path: "child",
        index: true,
        // element: <Child />,
        async lazy() {
          let Child = await import("./Child");
          return { Component: Child.default };
        },
        // loader: teamLoader,
      },
      {
        path: "p",
        element: <PLP />,
        // loader: teamLoader,
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
    {/* <ProductList /> */}
    {/* <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        // reset the state of your app here
      }}
      resetKeys={["someKey"]}
    > */}
    <RouterProvider router={router} />
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById("root")
);
