import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl">
        Crea tu <span className="text-slate-700">cuenta</span>
      </h1>

      <form action="" className="my-10 bg-white shadow rounded-lg px-10 p-10">
        {/* NOMBRE */}
      <div className="my-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 text-xl font-bold block"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        {/* CORREO ELECTRONICO */}
        <div className="my-5">
          <label
            htmlFor="correo"
            className="uppercase text-gray-600 text-xl font-bold block"
          >
            Correo electronico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo electronico de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        
        {/* CONTRASENA */}
        <div className="my-5">
          <label
            htmlFor="contrasena"
            className="uppercase text-gray-600 text-xl font-bold block"
          >
            Contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            placeholder="Contraseña de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        {/*REPETIR CONTRASENA */}
        <div className="my-5">
          <label
            htmlFor="contrasena2"
            className="uppercase text-gray-600 text-xl font-bold block"
          >
            Repetir contraseña
          </label>
          <input
            id="contrasena2"
            type="password"
            placeholder="Repite Contraseña de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        {/* BOTON INICIAR SESION */}
        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between my-5 text-slate-500 uppercase text-sm">
        <Link to="/" className="block text-center">
          ¿Ya tienes una cuenta? Inicia sesion!
        </Link>

        <Link to="/olvide-password" className="block text-center">
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
