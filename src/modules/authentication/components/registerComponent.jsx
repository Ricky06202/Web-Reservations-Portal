import React from "react";

export default function RegisterForm() {
  return (
    <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img class="w-8 h-8 mr-2" src="/favicon.svg" />
            Formulario de Registro
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Llenar los campos requeridos
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div class="">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre de Usuario
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    placeholder="Juanito123"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nombre
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="Juanito"
                    required=""
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Apellido
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Peréz"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div class="">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Correo Electrónico
                    <span className="text-red-500 font-extrabold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    placeholder="juanito@empresa.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
