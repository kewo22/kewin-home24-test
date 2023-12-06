import React from "react";
import { Outlet } from "react-router-dom";

import SideNavigation from "../SideNavigation";
import Navigation from "../Navigation";

export default function Root() {
  return (
    <div className="font-rubik">
      <Navigation />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
