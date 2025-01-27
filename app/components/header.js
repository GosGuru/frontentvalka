"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Collapse,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1a1a1a",
        boxShadow: 3,
        width: "100%",
        minHeight: "60px", // Reduce la altura mínima del AppBar
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "0 16px" }}> {/* Reduce el padding horizontal */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0", // Elimina el padding extra del Toolbar
            minHeight: "60px", // Reduce la altura del Toolbar
          }}
        >
          {/* Logo con enlace al index */}
          <Link href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Image
                src="/LogoValka.png"
                alt="Logo Valka"
                width={100} // Logo más pequeño
                height={45} // Ajusta la altura del logo
                priority
              />
            </Box>
          </Link>

          {/* Navegación para pantallas grandes */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2, // Reduce el espacio entre los botones
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Link href="/sobrenosotros" passHref>
              <Button sx={{ color: "white", fontSize: "0.875rem", "&:hover": { color: "#f94510" } }}> {/* Texto más pequeño */}
                Sobre Nosotros
              </Button>
            </Link>
            <Link href="/routines" passHref>
              <Button sx={{ color: "white", fontSize: "0.875rem", "&:hover": { color: "#f94510" } }}>
                Rutinas
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button sx={{ color: "white", fontSize: "0.875rem", "&:hover": { color: "#f94510" } }}>
                Contacto
              </Button>
            </Link>
          </Box>

          {/* Botones de Inicio de Sesión y Registro */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}> {/* Reduce el espacio entre botones */}
            <Link href="/join/loginForm" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#f94510",
                  color: "#f94510",
                  fontSize: "0.875rem",
                  "&:hover": { backgroundColor: "#f94510", color: "white" },
                  borderRadius: ".5rem",
                  padding: "4px 12px", // Reduce el tamaño del botón
                }}
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/join/registerForm" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f94510",
                  fontSize: "0.875rem",
                  "&:hover": { backgroundColor: "#ffffff", color: "#f94510" },
                  borderRadius: ".5rem",
                  padding: "4px 12px", // Reduce el tamaño del botón
                }}
              >
                Registrarse
              </Button>
            </Link>
          </Box>

          {/* Botón de menú para pantallas pequeñas */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Abrir menú"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Menú desplegable para pantallas pequeñas */}
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            backgroundColor: "#1a1a1a",
            display: { xs: "block", md: "none" },
            padding: 2,
            borderTop: "1px solid #f94510",
            boxShadow: 3,
          }}
        >
          <Link href="/sobrenosotros" passHref>
            <Button fullWidth sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
              Sobre Nosotros
            </Button>
          </Link>
          <Link href="/routines" passHref>
            <Button fullWidth sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
              Rutinas
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button fullWidth sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
              Contacto
            </Button>
          </Link>

          {/* Botones de Inicio de Sesión y Registro */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            <Link href="/join/loginForm" passHref>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "#f94510",
                  color: "#f94510",
                  "&:hover": { backgroundColor: "#f94510", color: "white" },
                  borderRadius: ".5rem",
                }}
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/join/registerForm" passHref>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#f94510",
                  "&:hover": { backgroundColor: "#ffffff", color: "#f94510" },
                  borderRadius: ".5rem",
                }}
              >
                Registrarse
              </Button>
            </Link>
          </Box>
        </Box>
      </Collapse>
    </AppBar>
  );
}
