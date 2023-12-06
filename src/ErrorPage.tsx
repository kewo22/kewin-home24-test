import React from "react";

export default function ErrorPage(props: any) {
  console.log("🚀 ~ file: ErrorPage.tsx:4 ~ ErrorPage ~ props:", props);
  return (
    <div>
      <div>Oops!</div>
      <div>Something went wrong...</div>
      {props.resetErrorBoundary && (
        <div>
          <button onClick={props.resetErrorBoundary}>🔄 Try Again!</button>
        </div>
      )}
    </div>
  );
}
