import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Iniciar sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow rounded-lg px-10 p-10">
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
            placeholder="Contraseña de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between my-5 text-slate-500 uppercase text-sm">
        <Link to="/registrar" className="block text-center">
          ¿No tienes una cuenta? Regístrate!
        </Link>

        <Link to="/olvide-password" className="block text-center">
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Login;
