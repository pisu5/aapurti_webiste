import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Container,
  Collapse,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo (1).svg";
import { COLORS } from "../styles/colors";

export default function Navbar() {
  const location = useLocation();

  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => {
    setMobileAnchor(null);
    setMobileServicesOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      component="nav"                 // ✅ semantic nav
      aria-label="Primary navigation" // ✅ accessibility + SEO
      sx={{
        backgroundColor: COLORS.white,
        borderBottom: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: 64, px: { xs: 1, md: 0 } }}>

          {/* ================= LOGO / BRAND ================= */}
          <Box
            component={Link}
            to="/"
            aria-label="Aapurti Agribusiness Home"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Aapurti Agribusiness System Pvt. Ltd. logo"
              style={{ height: 34 }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                color: COLORS.textPrimary,
              }}
            >
              Aapurti
            </Typography>
          </Box>

          {/* ================= DESKTOP NAV ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
              alignItems: "center",
              gap: 1,
            }}
          >
            <NavButton to="/" active={isActive("/")}>
              Home
            </NavButton>

            <Button
              aria-haspopup="true"
              aria-expanded={Boolean(servicesAnchor)}
              aria-controls="services-menu"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => setServicesAnchor(e.currentTarget)}
              sx={{ color: COLORS.textSecondary, textTransform: "none" }}
            >
              Services
            </Button>

            <Menu
              id="services-menu"
              anchorEl={servicesAnchor}
              open={Boolean(servicesAnchor)}
              onClose={() => setServicesAnchor(null)}
              PaperProps={{ sx: { minWidth: 240, borderRadius: 1.5 } }}
            >
              <MenuItem component={Link} to="/services/crop-surveys">
                Crop Surveys
              </MenuItem>
              <MenuItem component={Link} to="/services/crop-health">
                Crop Health Monitoring
              </MenuItem>
              <MenuItem component={Link} to="/services/pmfby-qc">
                PMFBY Quality Control
              </MenuItem>
              <MenuItem component={Link} to="/services/cce">
                Crop Cutting Experiments
              </MenuItem>
            </Menu>

            <NavButton to="/features" active={isActive("/features")}>
              Features
            </NavButton>

            <NavButton to="/about" active={isActive("/about")}>
              About
            </NavButton>

            <NavButton to="/blogs" active={isActive("/blogs")}>
              Blogs
            </NavButton>

            <Button
              component={Link}
              to="/newsletter"
              variant="contained"
              sx={{
                ml: 1,
                backgroundColor: COLORS.accentPrimary,
                color: COLORS.white,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 1.5,
                px: 3,
              }}
            >
              Newsletter
            </Button>
          </Box>

          {/* ================= MOBILE NAV ================= */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={(e) => setMobileAnchor(e.currentTarget)}
            sx={{ ml: "auto", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={mobileAnchor}
            open={Boolean(mobileAnchor)}
            onClose={closeMobileMenu}
            PaperProps={{ sx: { width: "100%" } }}
          >
            <MenuItem component={Link} to="/" onClick={closeMobileMenu}>
              Home
            </MenuItem>

            <MenuItem onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              <ListItemText primary="Services" />
              {mobileServicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </MenuItem>

            <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
              <MenuItem sx={{ pl: 4 }} component={Link} to="/services/crop-surveys" onClick={closeMobileMenu}>
                Crop Surveys
              </MenuItem>
              <MenuItem sx={{ pl: 4 }} component={Link} to="/services/crop-health" onClick={closeMobileMenu}>
                Crop Health Monitoring
              </MenuItem>
              <MenuItem sx={{ pl: 4 }} component={Link} to="/services/pmfby-qc" onClick={closeMobileMenu}>
                PMFBY Quality Control
              </MenuItem>
              <MenuItem sx={{ pl: 4 }} component={Link} to="/services/cce" onClick={closeMobileMenu}>
                Crop Cutting Experiments
              </MenuItem>
            </Collapse>

            <MenuItem component={Link} to="/features" onClick={closeMobileMenu}>
              Features
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={closeMobileMenu}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/blogs" onClick={closeMobileMenu}>
              Blogs
            </MenuItem>
            <MenuItem component={Link} to="/newsletter" onClick={closeMobileMenu}>
              Newsletter
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

/* =====================
   SUB COMPONENT
===================== */

const NavButton = ({ to, active, children }) => (
  <Button
    component={Link}
    to={to}
    sx={{
      color: active ? COLORS.brandGreen : COLORS.textSecondary,
      fontWeight: active ? 600 : 400,
      textTransform: "none",
    }}
  >
    {children}
  </Button>
);
