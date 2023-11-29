import React from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import Navigation from "../Navigation";

export default function Root() {
  //   const { showBoundary } = useErrorBoundary();

  return (
    <div className="font-rubik">
      <Navigation />
      <SideNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
