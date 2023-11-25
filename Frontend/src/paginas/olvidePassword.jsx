import { Link } from "react-router-dom";

const olvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl">
        Recupera tu <span className="text-slate-700">acceso</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg px-10 p-10">
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

        {/* BOTON INICIAR SESION */}
        <input
          type="submit"
          value="Enviar instrucciones"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between my-5 text-slate-500 uppercase text-sm">
        <Link to="/registrar" className="block text-center">
          ¿No tienes una cuenta? Regístrate!
        </Link>
      </nav>
    </>
  );
};

export default olvidePassword;
