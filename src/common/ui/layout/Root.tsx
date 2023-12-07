import React from "react";
import { Outlet } from "react-router-dom";

import SideNavigation from "../SideNavigation";
import Navigation from "../Navigation";
import NavRibbon from "../NavRibbon";

export default function Root() {
  return (
    <div className="font-rubik">
      <NavRibbon />
      <Navigation />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
