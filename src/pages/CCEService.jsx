import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { COLORS } from "../styles/colors";

/* ================= IMAGES ================= */
import cce from "../assets/cce.webp";

/* ================= STEPS ================= */
const STEPS = [
  {
    title: "Plot Selection & Assignment",
    text:
      "Sampling frames are prepared centrally using IU, village, and plot data. Plots are selected as per state methodology and assigned digitally.",
  },
  {
    title: "Plot Measurement & Marking",
    text:
      "Sample plots are measured on-site using GPS. Crop-specific sample areas are marked and locked before harvest.",
  },
  {
    title: "Crop Harvest (Cut)",
    text:
      "Only the marked sample area is harvested. Field teams capture geo-tagged images and contextual observations.",
  },
  {
    title: "Weighing & Yield Standardization",
    text:
      "Harvested produce is weighed, moisture corrections are applied, and yields are standardized to per-hectare values.",
  },
  {
    title: "Validation & Quality Control",
    text:
      "Automated checks and supervisor review ensure data quality, auditability, and policy compliance.",
  },
];

export default function CropCuttingExperiment() {
  return (
    <Box sx={{ backgroundColor: COLORS.surface }}>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(
            180deg,
            ${COLORS.brandGreenSoft} 0%,
            ${COLORS.surface} 100%
          )`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 44 },
                  fontWeight: 800,
                }}
              >
                Crop Cutting Experiment (CCE)
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: 16,
                  color: COLORS.textSecondary,
                  maxWidth: 520,
                }}
              >
                A field-driven, auditable CCE execution framework designed for
                PMFBY, insurers, and government programs.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: COLORS.accentPrimary,
                    fontWeight: 600,
                    px: 4,
                    "&:hover": {
                      backgroundColor: COLORS.accentHover,
                    },
                  }}
                >
                  Request Demo
                </Button>

                <Button variant="outlined" sx={{ px: 4 }}>
                  Download Overview
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <HeroImage src={cce} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= PROCESS ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 800,
            mb: 6,
            textAlign: "center",
          }}
        >
          How the CCE workflow works
        </Typography>

        <Grid container spacing={4}>
          {STEPS.map((step, index) => (
            <Grid key={index} item xs={12} md={6}>
              <ProcessCard index={index + 1} {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= OUTCOME ================= */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: COLORS.surfaceMuted }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 26, fontWeight: 800, mb: 2 }}>
                What clients receive
              </Typography>

              <Stack spacing={1.5}>
                <Typography sx={{ color: COLORS.textSecondary }}>
                  • Structured CCE datasets (CSV / API)
                </Typography>
                <Typography sx={{ color: COLORS.textSecondary }}>
                  • Geo-tagged image evidence
                </Typography>
                <Typography sx={{ color: COLORS.textSecondary }}>
                  • Exception and supervisor approval reports
                </Typography>
                <Typography sx={{ color: COLORS.textSecondary }}>
                  • Complete audit trail & methodology notes
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <HeroImage src={cce} />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

/* ================= COMPONENTS ================= */

function ProcessCard({ index, title, text }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 3,
        border: `1px solid ${COLORS.borderLight}`,
        backgroundColor: COLORS.white,
        transition: "all 0.25s ease",
        "&:hover": {
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Stack spacing={2}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: COLORS.accentPrimary,
            color: COLORS.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          {index}
        </Box>

        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
          {title}
        </Typography>

        <Typography sx={{ color: COLORS.textSecondary }}>
          {text}
        </Typography>
      </Stack>
    </Paper>
  );
}

function HeroImage({ src }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 260, md: 380 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
}
