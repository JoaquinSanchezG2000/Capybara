import CartPage from "./Cart";
const Header = () => {
  //https://paletton.com/#uid=13q0u0kboSe4L++4L++4zgo4zgo paleta de colores
  return (
    <header className="bg-principalGray w-full text-white sticky w-full z-10">
      <div className="container    ">
        <nav className="flex  items-center justify-between border-b border-white  ">
          <div>
            <img src="/profile.png" className="w-[18rem] h-[6rem] p-4 cursor-pointer " alt="" />
          </div>
          <ul className="flex space-x-4 text-xl m-3">
            <li>
              <a href="/catalogo" className="m-10  text-gray-600 hover:text-blue-300">
                Catálogo
              </a>
            </li>
            <li>
              <a href="/contacto" className="m-10 text-gray-600 hover:text-blue-300">
                Contacto
              </a>
            </li>
            <li>
              <a href="/informacion" className="m-10 text-gray-600 hover:text-blue-300">
                Información
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
