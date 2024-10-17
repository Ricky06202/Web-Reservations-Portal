import { useFieldHook } from "@authentication/hooks/useFieldHook";
import { register } from "@authentication/services/authApi";
import { useAuthStore } from "@authentication/stores/authStore";

export default function RegisterForm() {
  const [usuario, changeUsuario] = useFieldHook();
  const [email, changeEmail] = useFieldHook();
  const [password, changePassword] = useFieldHook();
  const [confirmPassword, changeConfirmPassword] = useFieldHook();
  const setUser = useAuthStore((state) => state.setUser);

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    register(usuario, email, password)
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
                Llenar los campos requeridos
              </h1>
              <form
                onSubmit={onSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div className="">
                  <label
                    htmlFor="user"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nombre de Usuario
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    value={usuario}
                    onChange={changeUsuario}
                    id="user"
                    placeholder="Juanito123"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Correo Electrónico
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    value={email}
                    onChange={changeEmail}
                    id="email"
                    placeholder="juanito@empresa.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Contraseña
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    value={password}
                    onChange={changePassword}
                    id="password"
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password2"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirmar Contraseña
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={changeConfirmPassword}
                    id="password2"
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Registrarse
                </button>
                <p className="flex flex-col items-center text-sm font-light text-gray-500 ">
                  ¿Ya Tienes una Cuenta?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Inicia Sesión
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
