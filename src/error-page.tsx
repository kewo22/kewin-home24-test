import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }

    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }

  //   const error = useRouteError();
  //   console.error(error);

  //   const errorMessage = (error: unknown) => {
  //     if (isRouteErrorResponse(error)) {
  //       return `${error.status} ${error.statusText}`;
  //     } else if (error instanceof Error) {
  //       return error.message;
  //     } else if (typeof error === "string") {
  //       return error;
  //     } else {
  //       console.error(error);
  //       return "Unknown error";
  //     }
  //   };

  //   return (
  //     <div id="error-page">
  //       <h1>Oops!</h1>
  //       <p>Sorry, an unexpected error has occurred.</p>
  //       {errorMessage(error)}
  //       <p>{/* <i>{error.statusText || error.message}</i> */}</p>
  //     </div>
  //   );
}
