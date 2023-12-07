import React from "react";

import { useTranslation } from "react-i18next";

import Button from "./atom/Button";

export default function NavRibbon() {
  const { i18n } = useTranslation();

  return (
    <div className="bg-secondary py-2 flex flex-row justify-end px-5 lg:px-24">
      <div className="flex flex-row gap-2">
        <Button
          variant="outline"
          customClass="px-2 py-1 text-xs"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </Button>
        <Button
          variant="outline"
          customClass="px-2 py-1 text-xs"
          onClick={() => {
            i18n.changeLanguage("de");
          }}
        >
          DE
        </Button>
      </div>
    </div>
  );
}
