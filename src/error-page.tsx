import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(props: any) {
  const error = useRouteError();
  console.log("🚀 ~ file: error-page.tsx:6 ~ ErrorPage ~ error:", error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    } else if (error.status === 422) {
      // ...
      return <>qwdwqdwqqwdwq</>
    }

    return (
      <div
        id="error-page"
        className="h-screen bg-red-100 flex flex-col items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-5xl">Oops! {error.status}</h1>
          <p className="text-2xl my-3">{error.statusText}</p>
          {error.data?.message && (
            <p>
              <i>{error.data.message}</i>
            </p>
          )}
        </div>
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
}
