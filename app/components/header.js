"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
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
      sx={{ backgroundColor: "#1a1a1a", boxShadow: 3, width: "100%" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Distribuye los elementos
            alignItems: "center",
            width: "100%", // Para ocupar todo el ancho del contenedor
          }}
        >
            {/* Logo con enlace al index */}
          <Link href="/" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src="/LogoValka.png" // Ruta al logo en la carpeta public
                alt="Logo Valka"
                width={40} // Ancho del logo
                height={40} // Alto del logo
                priority // Optimización de carga
              />
            </Box>
          </Link>

          {/* Navigation for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <a
              href="../pages/sobrenosotros"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Sobre Nosotros
              </Button>
            </a>
            <a
              href="../routines"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Rutinas
              </Button>
            </a>
            <a
              href="../pages/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Contacto
              </Button>
            </a>
          </Box>

          {/* Login and Register Buttons for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Link href="/join/loginForm" passHref>
              <Button
                variant="outlined"
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

          {/* Menu button for smaller screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Collapsible Menu for smaller screens */}
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
          <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
              Sobre Nosotros
            </Button>
          </a>
          <a
            href="#routines"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
              Rutinas
            </Button>
          </a>
          <a
            href="#contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
              Contacto
            </Button>
          </a>

          {/* Login and Register Buttons */}
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
