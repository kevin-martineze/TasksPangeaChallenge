const nuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl">
        Restablece tu <span className="text-slate-700">contraseña</span>
      </h1>

      <form action="" className="my-10 bg-white shadow rounded-lg px-10 p-10">
        {/* CONTRASENA */}
        <div className="my-5">
          <label
            htmlFor="contrasena"
            className="uppercase text-gray-600 text-xl font-bold block"
          >
            Nueva Contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            placeholder="Escribe tu nueva Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        {/* BOTON RESTABLECER */}
        <input
          type="submit"
          value="Restablecer"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
    </>
  );
};

export default nuevoPassword;
