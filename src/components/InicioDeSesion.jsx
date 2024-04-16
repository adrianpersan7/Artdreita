import React from 'react';

const InicioDeSesion = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-12 pt-12 pb-16 mb-4">
        <h1>Inicio De Sesión</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario" type="text" placeholder="Usuario" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contraseña" type="password" placeholder="******************" />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default InicioDeSesion;