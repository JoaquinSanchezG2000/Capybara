import Image from "next/image";
import Header from "@/Components/Header";
import { PreCatalogo } from "@/Components/PreCatalogo";

// Importa los estilos de react-slick solo en el cliente

export default function Home() {
  return (
    <main className="bg-white-300">
      <Header></Header>
      <PreCatalogo></PreCatalogo>
    </main>
  );
}
