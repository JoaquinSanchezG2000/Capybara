import React from "react";
import { Categorias } from "./Categorias";

export const PreCatalogo = () => {
  return (
    <div className="flex items-center justify-center w-full bg-secundary p-4 mt-[10rem]">
      <div className="grid grid-cols-3 grid-rows-2 gap-10 p-10  w-[80%] ">
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
