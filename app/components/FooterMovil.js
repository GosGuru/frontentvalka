"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importar useRouter para la navegación
import { Home, Search, AccountCircle, Settings } from "@mui/icons-material"; // Iconos de Material-UI
import "../styles/footerMovil.css";

const FooterMovil = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <div className="footer">
      <button className="footer-button" onClick={handleBack}>
        <Home className="footer-icon" />
        <span>Volver</span> {/* Icono de Home */}
      </button>
      <button className="footer-button">
        <Search className="footer-icon" />
        <span>Buscar</span> {/* Icono de búsqueda */}
      </button>
      <button className="footer-button">
        <AccountCircle className="footer-icon" />
        <span>Perfil</span> {/* Icono de perfil */}
      </button>
      <button className="footer-button">
        <Settings className="footer-icon" />
        <span>Configuración</span> {/* Icono de configuración */}
      </button>
    </div>
  );
};

export default FooterMovil;
