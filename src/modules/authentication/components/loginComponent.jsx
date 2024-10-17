import { useFieldHook } from "@authentication/hooks/useFieldHook";
import { login } from "@authentication/services/authApi";
import { useAuthStore } from "@authentication/stores/authStore";
export default function LoginForm() {
  const [usuario, changeUsuario] = useFieldHook();
  const [password, changePassword] = useFieldHook();
  const setUser = useAuthStore((state) => state.setUser);
  const token = useAuthStore((state) => state.token);

  const onSubmit = (event) => {
    event.preventDefault();

    login(usuario, password)
      .then(async (data) => {
        if (data?.token) {
          await setUser(
            data.token,
            data.user.id,
            data.user.username,
            data.user.email,
          );
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Inicia sesión con tu cuenta
              </h1>
              <form
                onSubmit={onSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="user"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Usuario
                  </label>
                  <input
                    value={usuario}
                    onChange={changeUsuario}
                    name="user"
                    id="user"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="Ingrese su Usuario"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Contraseña
                  </label>
                  <input
                    value={password}
                    onChange={changePassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    ¿Olvidaste la contraseña?
                  </a>
                </div>
                <button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Iniciar Sesión
                </button>
                <p className="flex flex-col items-center text-sm font-light text-gray-500 ">
                  ¿Aún no tienes cuenta?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Regístrate
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
