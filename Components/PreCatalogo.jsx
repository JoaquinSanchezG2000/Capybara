import React from "react";
import { Categorias } from "./Categorias";

export const PreCatalogo = () => {
  return (
    <div className="flex items-center justify-center w-full border border-red-500">
      <div className="grid grid-cols-3 grid-rows-2 gap-2 p-10 border border-red-300 w-[80%] ">
        <Categorias></Categorias>
        <Categorias></Categorias>
        <Categorias></Categorias>
        <Categorias></Categorias>
        <Categorias></Categorias>
        <Categorias></Categorias>
      </div>
    </div>
  );
};
