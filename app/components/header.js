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
      sx={{ backgroundColor: "#1a1a1a", boxShadow: 3, width: "100%" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo con enlace al index */}
          <Link href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Image
                src="/LogoValka.png" // Ruta relativa para el componente Image
                alt="Logo Valka"
                width={40}
                height={40}
                priority
              />
            </Box>
          </Link>

          {/* Navegación para pantallas grandes */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Link href="/sobrenosotros" passHref>
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Sobre Nosotros
              </Button>
            </Link>
            <Link href="/routines" passHref>
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Rutinas
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button sx={{ color: "white", "&:hover": { color: "#f94510" } }}>
                Contacto
              </Button>
            </Link>
          </Box>

          {/* Botones de Inicio de Sesión y Registro */}
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
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
              Sobre Nosotros
            </Button>
          </Link>
          <Link href="/routines" passHref>
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
              Rutinas
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              fullWidth
              sx={{ color: "white", "&:hover": { color: "#f94510" } }}
            >
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
