"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Revisa si usas la versión correcta de next/router
import { ENV } from "../../utils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ENV.API_BASE_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage("Inicio de sesión exitoso. Redirigiendo...");
        localStorage.setItem("token", data.jwt); // Guarda el token en localStorage
        console.log("Token guardado");

        // Obtén el token después de guardarlo
        const token = localStorage.getItem("token");
        console.log("Obteniendo token: " + token);

        router.push("/"); // Redirecciona a la página principal
      } else {
        setIsSuccess(false);
        setMessage(
          data.error?.message || "Credenciales incorrectas. Intenta de nuevo."
        );
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Error del servidor. Por favor, intenta más tarde.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
        <form
          onSubmit={handleLogin}
          className="bg-[#222222] p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>

          {message && (
            <div
              className={`p-3 mb-4 text-center rounded-lg ${
                isSuccess ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#f94510]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#f94510]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#f94510] rounded-lg font-semibold hover:bg-[#f73e00] transition-colors duration-300"
          >
            Iniciar Sesión
          </button>
          <p className="mt-4 text-center text-gray-400">
            ¿No tienes una cuenta?{" "}
            <a href="/join/registerForm" className="text-[#f94510] hover:underline">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
