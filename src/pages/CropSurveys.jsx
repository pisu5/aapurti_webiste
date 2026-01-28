import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { COLORS } from "../styles/colors";

/* ======================================================
   ASSETS
====================================================== */

import planning from "../assets/survey_planning.webp";
import execution from "../assets/survey_execution.webp";
import capture from "../assets/survey_execution.webp";
import validation from "../assets/survey_execution.webp";
import output from "../assets/survey_execution.webp";

/* ======================================================
   DATA
====================================================== */

const STEPS = [
  {
    step: "01",
    title: "Survey Planning & Assignment",
    description:
      "Survey programs are centrally configured and digitally deployed to field staff.",
    bullets: [
      "Village, plot, and farmer master data uploaded",
      "Crop, season, and scope locked centrally",
      "Assignments pushed directly to surveyors",
    ],
    image: planning,
  },
  {
    step: "02",
    title: "On-Ground Crop Verification",
    description:
      "Surveyors visit plots and record crop observations directly from the field.",
    bullets: [
      "Crop type and variety verified",
      "Growth stage and crop condition recorded",
      "Automatic GPS capture during visit",
    ],
    image: execution,
    reverse: true,
    alt: true,
  },
  {
    step: "03",
    title: "Geo-Tagged Image Capture",
    description:
      "Photographic evidence is captured under controlled in-app rules.",
    bullets: [
      "Time-stamped, geo-tagged images",
      "Mandatory multi-angle capture",
      "Camera restricted to app usage",
    ],
    image: capture,
  },
  {
    step: "04",
    title: "Validation & Quality Controls",
    description:
      "Automated and manual checks ensure only compliant records are accepted.",
    bullets: [
      "GPS deviation and mismatch alerts",
      "Image compliance and duplication checks",
      "Crop anomaly and inconsistency flags",
    ],
    image: validation,
    reverse: true,
    alt: true,
  },
  {
    step: "05",
    title: "Client Outputs & Audit Trail",
    description:
      "Final datasets are structured, traceable, and audit-ready.",
    bullets: [
      "Plot-wise structured datasets",
      "Linked geo-tagged image repository",
      "Deviation and exception reports",
      "Complete audit trail for compliance",
    ],
    image: output,
  },
];

/* ======================================================
   MAIN
====================================================== */

export default function CropSurveyPlatform() {
  return (
    <Box sx={{ backgroundColor: COLORS.surface }}>
      <ImpactSection />
      <ProcessIntro />
      {STEPS.map((step) => (
        <ProcessSection key={step.step} {...step} />
      ))}
    </Box>
  );
}

/* ======================================================
   IMPACT SECTION (EXECUTIVE)
====================================================== */

function ImpactSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: COLORS.surfaceMuted,
        borderBottom: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Chip
            label="PMFBY Crop Survey Operations"
            sx={{
              width: "fit-content",
              backgroundColor: COLORS.white,
              color: COLORS.brandGreen,
              fontWeight: 600,
              border: `1px solid ${COLORS.borderLight}`,
            }}
          />

          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              border: `1px solid ${COLORS.borderLight}`,
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
              backgroundColor: COLORS.white,
            }}
          >
            <Grid container spacing={4}>
              {[
                { value: "500K+", label: "Surveys Executed" },
                { value: "10+", label: "Crop Types Covered" },
                { value: "10+", label: "States Operational" },
                { value: "10+", label: "Years of Execution" },
              ].map((item, i) => (
                <Grid item xs={6} md={3} key={i}>
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: 28, md: 42 },
                        fontWeight: 700,
                        color: COLORS.brandGreen,
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: COLORS.textSecondary,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

/* ======================================================
   PROCESS INTRO
====================================================== */

function ProcessIntro() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: 26, md: 36 },
            fontWeight: 700,
            color: COLORS.textPrimary,
            mb: 2,
          }}
        >
          End-to-End Crop Survey Execution
        </Typography>

        <Typography
          sx={{
            maxWidth: 760,
            color: COLORS.textSecondary,
            fontSize: 16,
          }}
        >
          A standardized, field-proven workflow designed for large-scale
          agricultural insurance surveys — ensuring accuracy, traceability,
          and audit-readiness at every stage.
        </Typography>
      </Container>
    </Box>
  );
}

/* ======================================================
   PROCESS SECTION
====================================================== */

function ProcessSection({
  step,
  title,
  description,
  bullets,
  image,
  reverse,
  alt,
}) {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: alt ? COLORS.surfaceMuted : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: COLORS.brandGreen,
                  }}
                >
                  STEP {step}
                </Typography>

                <Divider
                  sx={{
                    flex: 1,
                    borderColor: COLORS.borderLight,
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: 20, md: 26 },
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                }}
              >
                {title}
              </Typography>

              <Typography sx={{ color: COLORS.textSecondary }}>
                {description}
              </Typography>

              <Stack spacing={1}>
                {bullets.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: 14,
                      color: COLORS.textSecondary,
                    }}
                  >
                    — {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                border: `1px solid ${COLORS.borderLight}`,
                backgroundColor: COLORS.white,
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: "100%", display: "block" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
