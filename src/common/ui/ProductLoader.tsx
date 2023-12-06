import React from "react";

export default function ProductLoader() {
  return (
    <div className="py-20 px-10 lg:px-12 xl:px-20 2xl:px-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => {
        return (
          <div
            key={`product-loader-${i}`}
            className="min-h-[400px] bg-white shadow-xl flex flex-col items-center gap-5 p-10 relative"
          >
            <div className="h-[200px] w-[200px] bg-slate-200"></div>
            <div className="h-[24px] w-[100px] bg-slate-200"></div>
            <div className="h-[24px] w-[140px] bg-slate-200"></div>
          </div>
        );
      })}
    </div>
  );
}
