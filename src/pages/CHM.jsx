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
  HealthAndSafety,
  PestControl,
  Insights,
  TrackChanges,
  VerifiedUser,
  Public,
} from "@mui/icons-material";
import { COLORS } from "../styles/colors";

/* ================= DATA ================= */
const STATS = [
  { label: "Acres Monitored", value: "2.4M+" },
  { label: "Working States", value: "15+" },
  { label: "Pest Alerts Issued", value: "18K+" },
  { label: "Districts Active", value: "190+" },
];

const FEATURES = [
  {
    title: "Stress Detection",
    icon: <HealthAndSafety />,
    text: "Detect early signs of crop moisture stress and nutrient deficiencies using field-level surveys and standardized health indices.",
  },
  {
    title: "Infestation Tracking",
    icon: <PestControl />,
    text: "Real-time surveillance of pest and disease hotspots, allowing for rapid field verification and localized risk mitigation.",
  },
  {
    title: "Risk Indicators",
    icon: <Insights />,
    text: "Continuous tracking of environmental risk indicators that impact yield performance throughout the crop lifecycle.",
  },
];

const WORKFLOW_STEPS = [
  {
    n: "01",
    title: "Baseline Assessment",
    body: "Establishing historical health benchmarks for specific crop varieties and geographies to identify anomalies.",
  },
  {
    n: "02",
    title: "Field Surveillance",
    body: "Mobile-first field agents record observations, moisture levels, and health markers via geo-tagged entries.",
  },
  {
    n: "03",
    title: "Risk Modeling",
    body: "Data is analyzed against weather patterns and historical data to predict potential loss events before they occur.",
  },
];

export default function CropHealthMonitoring() {
  return (
    <Box sx={{ backgroundColor: COLORS.surface }}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(180deg, ${COLORS.brandGreenSoft} 0%, ${COLORS.surface} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: COLORS.accentPrimary }} />
                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 1.5, color: COLORS.textSecondary }}>
                  Service 04
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: 38, md: 54 },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 3,
                  color: COLORS.textPrimary,
                }}
              >
                Crop Health <br />
                <span style={{ color: COLORS.accentPrimary }}>Monitoring & Surveillance</span>
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  color: COLORS.textSecondary,
                  lineHeight: 1.6,
                  maxWidth: 600,
                  mb: 5,
                }}
              >
                Real-time surveillance and risk indicator tracking leveraging field surveys and analytical tools.
                Enable proactive risk assessment and timely intervention—supporting both insurance underwriting and government planning.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: COLORS.accentPrimary,
                    px: 4, py: 1.5, fontWeight: 700, borderRadius: 2,
                    "&:hover": { backgroundColor: COLORS.accentHover },
                  }}
                >
                  Request Health Audit
                </Button>
                <Button variant="outlined" sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 600 }}>
                  View Indicators
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: `1px solid ${COLORS.borderLight}`,
                  backgroundColor: COLORS.white,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 4, textAlign: "center", fontSize: 18 }}>
                  Our Surveillance Footprint
                </Typography>
                <Grid container spacing={3}>
                  {STATS.map((st, i) => (
                    <Grid item xs={6} key={i}>
                      <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.accentPrimary }}>
                        {st.value}
                      </Typography>
                      <Typography sx={{ fontSize: 13, fontWeight: 600, color: COLORS.textSecondary, textTransform: "uppercase" }}>
                        {st.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= CORE FEATURES ================= */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontSize: 32, fontWeight: 800, mb: 2 }}>
            Early Detection, Proactive Mitigation
          </Typography>
          <Typography sx={{ color: COLORS.textSecondary, maxWidth: 600, mx: "auto" }}>
            Our monitoring framework detects signs of crop stress long before they translate into yield losses.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {FEATURES.map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 4, height: "100%", borderRadius: 3,
                  border: `1px solid ${COLORS.borderLight}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
                    borderColor: COLORS.accentPrimary,
                  }
                }}
              >
                <Box sx={{ color: COLORS.accentPrimary, mb: 3 }}>
                  {React.cloneElement(feature.icon, { sx: { fontSize: 48 } })}
                </Box>
                <Typography sx={{ fontSize: 22, fontWeight: 800, mb: 2 }}>{feature.title}</Typography>
                <Typography sx={{ color: COLORS.textSecondary, lineHeight: 1.7 }}>
                  {feature.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= WORKFLOW SECTION ================= */}
      <Box sx={{ py: 12, backgroundColor: COLORS.surfaceMuted }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography sx={{ fontSize: 32, fontWeight: 800, mb: 3 }}>
                Proactive Intervention Framework
              </Typography>
              <Typography sx={{ color: COLORS.textSecondary, mb: 5 }}>
                We provide a standardized process to move from raw field observations
                to actionable risk intelligence for underwriters and planners.
              </Typography>

              <Stack spacing={4}>
                {WORKFLOW_STEPS.map((step, i) => (
                  <Stack key={i} direction="row" spacing={3}>
                    <Box
                      sx={{
                        width: 44, height: 44, borderRadius: "50%",
                        backgroundColor: COLORS.white, border: `2px solid ${COLORS.accentPrimary}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, fontWeight: 800, color: COLORS.accentPrimary
                      }}
                    >
                      {step.n}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 0.5 }}>{step.title}</Typography>
                      <Typography sx={{ color: COLORS.textSecondary, fontSize: 15 }}>{step.body}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  backgroundColor: COLORS.white, p: 2, borderRadius: 4,
                  border: `1px solid ${COLORS.borderLight}`,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.1)"
                }}
              >
                <Box
                  component="img"
                  src="/assets/monitoring-dashboard.webp" // Reference placeholder
                  sx={{ width: "100%", borderRadius: 3, display: "block" }}
                  alt="Monitoring Dashboard"
                />
                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <TrackChanges sx={{ color: COLORS.accentPrimary }} />
                    <Typography sx={{ fontSize: 10, fontWeight: 800 }}>LIVE TRACKING</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Public sx={{ color: COLORS.accentPrimary }} />
                    <Typography sx={{ fontSize: 10, fontWeight: 800 }}>MULTI-STATE</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <VerifiedUser sx={{ color: COLORS.accentPrimary }} />
                    <Typography sx={{ fontSize: 10, fontWeight: 800 }}>AUDIT READY</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}