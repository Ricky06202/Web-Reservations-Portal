import { useState, useEffect, useRef } from "react";
import { AstroIcon } from "./icons/AstroIcon";
import { Profile } from "./icons/Profile";

interface Props {
  needLogin?: boolean;
}
export default function Header({ needLogin = false }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const userName = "Usuario"; // Este valor vendría de tu sistema de autenticación

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md mb-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <AstroIcon className="w-10 h-10 text-primary" />
              <span className="text-2xl font-semibold text-gray-900">
                Portal de Reservas
              </span>
            </a>
          </div>
          {!needLogin && (
            <div className="flex items-center">
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  <span className="text-lg font-medium">{userName}</span>
                  <Profile className="w-10 h-10" />
                </button>

                {isMenuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">
                        {userName}
                      </p>
                      <p className="text-xs text-gray-600">
                        {userName.toLowerCase()}@correo.com
                      </p>
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Mi perfil
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Configuración
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Eventos suscritos
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Calendario
                    </a>
                    <div className="border-t border-gray-200">
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Cerrar Sesión
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
