import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import {
  AssessmentOutlined,
  GpsFixed,
  PhotoCamera,
  Scale,
  VerifiedUser
} from "@mui/icons-material";
import { COLORS } from "../styles/colors";

/* ================= IMAGES ================= */
import cce from "../assets/cce.webp";

/* ================= DATA ================= */
const STATS = [
  { label: "CCEs Completed", value: "500,000+" },
  { label: "Working States", value: "18+" },
  { label: "Districts Covered", value: "240+" },
  { label: "Precision Rate", value: "99.9%" },
];

const STEPS = [
  {
    title: "Plot Selection & Assignment",
    icon: <GpsFixed />,
    text: "Sampling frames are prepared centrally using IU, village, and plot data. Plots are selected via state methodology and assigned digitally to field agents.",
  },
  {
    title: "Plot Measurement & Marking",
    icon: <AssessmentOutlined />,
    text: "Sample plots are measured on-site using high-precision GPS. Crop-specific areas are marked and digitally locked before harvest starts.",
  },
  {
    title: "Co-witnessed Harvest",
    icon: <PhotoCamera />,
    text: "The harvest is captured via geo-tagged images and videos. Our app ensures co-witnessing documentation to prevent data manipulation.",
  },
  {
    title: "Weighing & Standardization",
    icon: <Scale />,
    text: "Harvested produce is weighed on-site. Moisture corrections are applied automatically to standardize yields to per-hectare values.",
  },
  {
    title: "Audit & Quality Control",
    icon: <VerifiedUser />,
    text: "Automated logic checks and supervisor reviews ensure policy compliance and create a tamper-proof audit trail.",
  },
];

export default function CropCuttingExperiment() {
  return (
    <Box sx={{ backgroundColor: COLORS.surface }}>

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          pt: { xs: 8, md: 15 },
          pb: { xs: 8, md: 10 },
          background: `linear-gradient(135deg, ${COLORS.brandGreenSoft} 0%, #FFFFFF 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ color: COLORS.accentPrimary, fontWeight: 700, letterSpacing: 1.2 }}
              >
                Crop Cutting Experiments Cowitness
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 36, md: 52 },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mt: 1,
                  color: COLORS.textPrimary,
                }}
              >
                Digitized, co-witnessed CCE execution with <span style={{ color: COLORS.accentPrimary }}>complete audit trails.</span>
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  fontSize: 18,
                  color: COLORS.textSecondary,
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                Transform traditional CCE execution with our proprietary Android app featuring guided workflows,
                automatic GPS capture, photo/video documentation, and seamless offline-to-online synchronization.
                Every experiment is geo-referenced, co-witnessed, and audit-ready.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: COLORS.accentPrimary,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: 16,
                    fontWeight: 600,
                    "&:hover": { backgroundColor: COLORS.accentHover },
                  }}
                >
                  Request a Demo
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ px: 4, borderRadius: 2, textTransform: "none", fontSize: 16 }}
                >
                  View Case Studies
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <HeroImage src={cce} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= STATS BAR ================= */}
      <Container maxWidth="lg" sx={{ mt: -5, position: "relative", zIndex: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 4,
            textAlign: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <Box key={i}>
              <Typography sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: COLORS.accentPrimary }}>
                {stat.value}
              </Typography>
              <Typography sx={{ fontSize: 14, color: COLORS.textSecondary, fontWeight: 500, textTransform: "uppercase" }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Container>

      {/* ================= WORKFLOW SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontSize: 32, fontWeight: 800, mb: 2 }}>
            The Cowitnessed Workflow
          </Typography>
          <Typography sx={{ color: COLORS.textSecondary, maxWidth: 600, mx: "auto" }}>
            Our end-to-end digital process ensures that yield estimation is transparent,
            verifiable, and delivered faster for crop insurance.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {STEPS.map((step, index) => (
            <Grid key={index} item xs={12} md={4}>
              <ProcessCard index={index + 1} {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= OUTCOME SECTION ================= */}
      <Box sx={{ py: 10, backgroundColor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box component="img" src={cce} sx={{ width: "100%", borderRadius: 4, boxShadow: 10 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 32, fontWeight: 800, mb: 3 }}>
                Actionable Yield Intelligence
              </Typography>
              <Typography sx={{ color: COLORS.textSecondary, mb: 4, fontSize: 17 }}>
                We provide insurers and government bodies with the raw data and validated
                evidence needed to settle claims with confidence.
              </Typography>

              <Stack spacing={2.5}>
                {[
                  "Structured CCE datasets (CSV / API Integration)",
                  "Tamper-proof Geo-tagged image & video evidence",
                  "Exception alerts & Supervisor approval logs",
                  "Comprehensive audit trails for PMFBY compliance"
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: COLORS.brandGreen, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#fff" }} />
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

/* ================= HELPER COMPONENTS ================= */

function ProcessCard({ index, title, text, icon }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 4,
        border: `1px solid ${COLORS.borderLight}`,
        transition: "0.3s",
        "&:hover": {
          borderColor: COLORS.accentPrimary,
          transform: "translateY(-5px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
        },
      }}
    >
      <Box sx={{ color: COLORS.accentPrimary, mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 40 } })}
      </Box>
      <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2 }}>
        {index}. {title}
      </Typography>
      <Typography sx={{ color: COLORS.textSecondary, lineHeight: 1.6 }}>
        {text}
      </Typography>
    </Paper>
  );
}

function HeroImage({ src }) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 450 },
          borderRadius: "10% 30% 10% 10%",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
        }}
      >
        <img src={src} alt="CCE" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      {/* Decorative element */}
      <Box
        sx={{
          position: "absolute",
          bottom: -20,
          left: -20,
          width: 100,
          height: 100,
          backgroundColor: COLORS.brandGreenSoft,
          zIndex: -1,
          borderRadius: 2
        }}
      />
    </Box>
  );
}