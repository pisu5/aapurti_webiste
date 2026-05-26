import React, { useState, useEffect } from "react";
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
  AssignmentTurnedIn,
  MyLocation,
  PhotoSizeSelectActual,
  FactCheck,
  Description,
} from "@mui/icons-material";
import { COLORS, THEME } from "../styles/colors";

/* ================= THEME & FONTS ================= */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');`;
const serif = { fontFamily: "'Fraunces', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };

/* ================= DATA ================= */
const STATS = [
  { v: "500K+", l: "Surveys Executed" },
  { v: "10+", l: "Crop Varieties" },
  { v: "18+", l: "States Covered" },
  { v: "10+", l: "Years in Field" },
];

const SERVICES = [
  {
    n: "01",
    cat: "Crop Loss Surveys",
    title: "Localized Calamity Assessment",
    body: "Rapid, accurate field verification for weather-related crop damage. Geo-tagged data capture delivers verifiable evidence that accelerates insurance claim processing.",
    tags: ["PMFBY Compliance", "Weather Verification"],
    icon: "🌾",
  },
  {
    n: "02",
    cat: "Post-Harvest Analysis",
    title: "Post Harvest Loss Surveys",
    body: "Post-harvest surveys require precision sampling. Trained enumerators conduct assessments with media evidence, co-witness sign-off, and real-time sync.",
    tags: ["Precision Sampling", "Co-witness Verified"],
    icon: "🚜",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Survey Planning & Assignment",
    icon: <AssignmentTurnedIn />,
    body: "Programs centrally configured and digitally deployed to field staff with full context.",
    pts: ["Farmer & plot master data uploaded", "Assignments pushed to surveyors' devices"],
  },
  {
    n: "02",
    title: "On-Ground Crop Verification",
    icon: <MyLocation />,
    body: "Surveyors visit each plot and record crop observations in real time from the field.",
    pts: ["Crop type and variety confirmed on-site", "Automatic GPS capture at point of entry"],
  },
  {
    n: "03",
    title: "Geo-Tagged Image Capture",
    icon: <PhotoSizeSelectActual />,
    body: "Photographic evidence taken under enforced in-app capture rules for compliance.",
    pts: ["Time-stamped and GPS-pinned photos", "Camera access locked to the survey app"],
  },
  {
    n: "04",
    title: "Validation & Quality Controls",
    icon: <FactCheck />,
    body: "Automated and supervisor checks filter out non-compliant or anomalous records.",
    pts: ["GPS deviation and mismatch flags", "Image quality and compliance checks"],
  },
  {
    n: "05",
    title: "Client Outputs & Audit Trail",
    icon: <Description />,
    body: "Final datasets delivered clean, structured, and fully traceable from field to report.",
    pts: ["Plot-wise structured export datasets", "End-to-end audit log for all entries"],
  },
];

export default function CropSurveyPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = FONTS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <Box sx={{ ...sans, backgroundColor: COLORS.neutralLightGray, minHeight: "100vh" }}>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          background: `linear-gradient(135deg, ${COLORS.secondaryGreen} 0%, #2A2914 100%)`,
          color: COLORS.neutralWhite,
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <Box sx={{ width: 4, height: 24, backgroundColor: COLORS.accentCTA }} />
            <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.9, fontWeight: 700 }}>
              PMFBY Certified Crop Survey Operations
            </Typography>
          </Stack>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  ...serif,
                  fontSize: { xs: 42, md: 64 },
                  lineHeight: 1.1,
                  fontWeight: 500,
                  mb: 4,
                }}
              >
                Field-Proven <br />
                <span style={{ color: COLORS.accentCTA, fontStyle: "italic" }}>Agricultural</span> <br />
                Survey Services
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: COLORS.accentCTA,
                  color: COLORS.neutralDarkGray,
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": { backgroundColor: COLORS.secondaryBrown, color: COLORS.neutralWhite },
                }}
              >
                Get Field Reports
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 18, opacity: 0.85, lineHeight: 1.8, maxWidth: 450, mb: 4 }}>
                Empowering insurers and government bodies with digitized, co-witnessed field data. Our surveys ensure 99.9% accuracy through automated GPS locks and real-time synchronization.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= STATS BAR ================= */}
      <Container maxWidth="lg" sx={{ mt: -8, position: "relative", zIndex: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 4,
            backgroundColor: COLORS.neutralWhite,
          }}
        >
          {STATS.map((st, i) => (
            <Box key={i} sx={{ textAlign: "center", borderRight: { md: i !== 3 ? `1px solid ${COLORS.neutralLightGray}` : "none" } }}>
              <Typography sx={{ ...serif, fontSize: 42, fontWeight: 500, color: COLORS.secondaryBrown, lineHeight: 1 }}>
                {st.v}
              </Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 600, color: COLORS.secondaryBlue, mt: 1, textTransform: "uppercase" }}>
                {st.l}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Container>

      {/* ================= SERVICES ================= */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
          <Box>
            <Typography sx={{ ...serif, fontSize: 36, color: COLORS.neutralDarkGray }}>Our Specializations</Typography>
            <Typography sx={{ color: COLORS.secondaryBlue, mt: 1 }}>Guideline-compliant field operations.</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" }, px: 2, py: 1, backgroundColor: `${COLORS.statusSuccess}15`, borderRadius: 2 }}>
            <Typography sx={{ fontSize: 12, color: COLORS.statusSuccess, fontWeight: 700 }}>✓ PMFBY COMPLIANT</Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SERVICES.map((sv) => (
            <Grid item xs={12} md={6} key={sv.n}>
              <Paper
                sx={{
                  p: 5,
                  height: "100%",
                  borderRadius: 4,
                  border: `1px solid #E5E7EB`,
                  backgroundColor: COLORS.neutralWhite,
                  position: "relative",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: "0 20px 40px rgba(90, 89, 44, 0.08)" },
                }}
              >
                <Typography sx={{ ...serif, fontSize: 64, position: "absolute", right: 30, top: 20, opacity: 0.05, color: COLORS.secondaryGreen }}>
                  {sv.n}
                </Typography>
                <Box sx={{ fontSize: 40, mb: 3 }}>{sv.icon}</Box>
                <Typography sx={{ color: COLORS.secondaryBrown, fontWeight: 700, fontSize: 12, mb: 1, textTransform: "uppercase", letterSpacing: 1 }}>
                  {sv.cat}
                </Typography>
                <Typography sx={{ ...serif, fontSize: 24, mb: 2, color: COLORS.secondaryGreen }}>{sv.title}</Typography>
                <Typography sx={{ color: COLORS.neutralDarkGray, mb: 4, lineHeight: 1.7 }}>{sv.body}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {sv.tags.map((t) => (
                    <Box key={t} sx={{ px: 1.5, py: 0.5, backgroundColor: COLORS.neutralLightGray, borderRadius: 1.5, mb: 1 }}>
                      <Typography sx={{ fontSize: 11, fontWeight: 600, color: COLORS.secondaryGreen }}>{t}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= WORKFLOW ================= */}
      <Box sx={{ py: 12, backgroundColor: COLORS.neutralWhite, borderTop: `1px solid ${COLORS.neutralLightGray}` }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ ...serif, fontSize: 40, mb: 2, color: COLORS.neutralDarkGray }}>Execution Excellence Workflow</Typography>
            <Typography sx={{ color: COLORS.secondaryBlue, maxWidth: 600, mx: "auto" }}>
              A standardized, field-proven workflow built for large-scale PMFBY crop survey operations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                {STEPS.map((step, i) => (
                  <Paper
                    key={i}
                    onClick={() => setActiveStep(i)}
                    elevation={0}
                    sx={{
                      p: 3,
                      cursor: "pointer",
                      borderRadius: 3,
                      border: `1px solid ${activeStep === i ? COLORS.secondaryGreen : COLORS.neutralLightGray}`,
                      backgroundColor: activeStep === i ? COLORS.secondaryGreen : COLORS.neutralLightGray,
                      color: activeStep === i ? COLORS.neutralWhite : COLORS.neutralDarkGray,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor: activeStep === i ? COLORS.secondaryGreen : "#EAEAEA",
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: 12, opacity: activeStep === i ? 0.8 : 0.6, fontWeight: 700, mb: 0.5 }}>
                      STEP {step.n}
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }}>{step.title}</Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 4, md: 6 },
                  height: "100%",
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: COLORS.neutralWhite,
                  border: `1px solid ${COLORS.neutralLightGray}`
                }}
              >
                <Box sx={{ color: COLORS.secondaryGreen, mb: 3 }}>
                  {/* Removed the TypeScript 'as' assertion here */}
                  {React.cloneElement(STEPS[activeStep].icon, { sx: { fontSize: 48 } })}
                </Box>
                <Typography sx={{ ...serif, fontSize: 32, mb: 2, color: COLORS.secondaryGreen }}>{STEPS[activeStep].title}</Typography>
                <Typography sx={{ fontSize: 18, color: COLORS.neutralDarkGray, mb: 4, lineHeight: 1.6 }}>{STEPS[activeStep].body}</Typography>

                <Divider sx={{ mb: 4, borderColor: COLORS.neutralLightGray }} />

                <Typography variant="overline" sx={{ fontWeight: 700, color: COLORS.secondaryBrown, letterSpacing: 1 }}>Key Activities</Typography>
                <Stack spacing={2.5} sx={{ mt: 2 }}>
                  {STEPS[activeStep].pts.map((pt, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: COLORS.accentCTA, flexShrink: 0 }} />
                      <Typography sx={{ fontWeight: 500, color: COLORS.secondaryBlue }}>{pt}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Box sx={{
                  mt: 6,
                  p: 2.5,
                  backgroundColor: COLORS.neutralLightGray,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 700, color: COLORS.neutralDarkGray }}>Progress Workflow</Typography>
                  <Typography sx={{ fontSize: 14, color: COLORS.secondaryGreen, fontWeight: 800 }}>
                    {Math.round(((activeStep + 1) / STEPS.length) * 100)}% Complete
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}