const CartPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Tu carrito de compras</h1>
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src="/ruta/a/imagen-del-producto.jpg"
            alt="Nombre del producto"
            className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <p className="font-semibold">Nombre del producto</p>
            <p className="text-sm text-gray-600">Precio: $29.99</p>
          </div>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Eliminar</button>
      </div>
      {/* Agregar más productos del carrito aquí */}
    </div>
  );
};

export default CartPage;
