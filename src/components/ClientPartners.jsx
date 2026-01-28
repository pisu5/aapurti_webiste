import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from "@mui/material";
import { COLORS } from "../styles/colors";
import fgi from "../assets/fgi.png";
import chola from "../assets/chola.png";
import sbig from "../assets/sbig.svg";
import bajaj from "../assets/bajaj.png";
import oicl from "../assets/oicl.jpg";
import DeHaat_Logo from "../assets/DeHaat_Logo.png";

const CLIENTS = [
    { name: "SBIG", logo: sbig },
    { name: "Kshema", logo: "https://kshema.co/wp-content/uploads/2024/05/kshema-logo-new.png" },
    { name: "Bajaj Allianz", logo: bajaj },
    { name: "OICL", logo: oicl },
    { name: "Reliance General", logo: "https://www.reliancegeneral.co.in/SiteAssets/MidLife/images/logo.webp" },
    { name: "Dehaat", logo: DeHaat_Logo },
    { name: "FGI", logo: fgi },
    { name: "Chola", logo: chola },
];

export default function ClientPartners() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 10 },
                background: `linear-gradient(
          180deg,
          ${COLORS.surface} 0%,
          ${COLORS.brandGreenSoft} 100%
        )`,
            }}
        >
            <Container maxWidth="lg">

                {/* HEADER */}
                <Box mb={6} textAlign="center">
                    <Typography
                        sx={{
                            fontSize: { xs: 26, md: 34 },
                            fontWeight: 800,
                            color: COLORS.textPrimary,
                            mb: 1,
                        }}
                    >
                        Our Trusted Client
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 15,
                            color: COLORS.textSecondary,
                            maxWidth: 640,
                            mx: "auto",
                        }}
                    >
                        Our field execution and data platforms are deployed by insurers,
                        enterprises, and public-sector programs nationwide.
                    </Typography>
                </Box>

                {/* LOGO PANEL */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: COLORS.white,
                        border: `1px solid ${COLORS.borderLight}`,
                        borderRadius: 4,
                        px: { xs: 3, md: 6 },
                        py: { xs: 4, md: 5 },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(auto-fit, minmax(120px, 1fr))",
                                sm: "repeat(auto-fit, minmax(140px, 1fr))",
                                md: "repeat(auto-fit, minmax(160px, 1fr))",
                            },
                            gap: { xs: 3, md: 4 },
                            alignItems: "center",
                        }}
                    >
                        {CLIENTS.map((client, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: 72,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 2,
                                    backgroundColor: COLORS.surfaceMuted,
                                    transition: "all 0.25s ease",
                                    "&:hover": {
                                        backgroundColor: COLORS.techBlueSoft,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    style={{
                                        maxHeight: 40,
                                        maxWidth: "80%",
                                        objectFit: "contain",
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://via.placeholder.com/160x40?text=" + client.name;
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Paper>


                {/* TRUST STATEMENT */}
                <Box
                    mt={5}
                    textAlign="center"
                    sx={{
                        fontSize: 13,
                        color: COLORS.textMuted,
                    }}
                >
                    Supporting large-scale agricultural deployments with
                    compliance-ready data, audited workflows, and execution discipline.
                </Box>

            </Container>
        </Box>
    );
}
