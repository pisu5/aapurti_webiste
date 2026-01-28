import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { COLORS } from "../styles/colors";

/* =====================================================
   FUTURE JOB OPENINGS
   👉 Add jobs here later, UI auto-updates
===================================================== */
const OPEN_POSITIONS = [];
// Example later:
// {
//   title: "Field Survey Coordinator",
//   location: "Madhya Pradesh",
//   type: "Full-time",
// }

export default function Careers() {
  const hasOpenings = OPEN_POSITIONS.length > 0;

  return (
    <Box sx={{ backgroundColor: COLORS.surface }}>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: `linear-gradient(
            180deg,
            ${COLORS.surface} 0%,
            ${COLORS.brandGreenSoft} 100%
          )`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: { xs: 30, md: 44 },
              fontWeight: 800,
              color: COLORS.textPrimary,
              mb: 2,
            }}
          >
            Careers at Aapurti Agribusiness
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              color: COLORS.textSecondary,
              maxWidth: 640,
            }}
          >
            We work at the intersection of agriculture, field execution, and
            data reliability. When we hire, we look for people who value
            accountability, precision, and real-world impact.
          </Typography>
        </Container>
      </Box>

      {/* ================= JOB LISTINGS ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography
          sx={{
            fontSize: 26,
            fontWeight: 700,
            color: COLORS.textPrimary,
            mb: 4,
          }}
        >
          Open Positions
        </Typography>

        {hasOpenings ? (
          <Grid container spacing={3}>
            {OPEN_POSITIONS.map((job, index) => (
              <Grid item xs={12} key={index}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyState />
        )}
      </Container>

      {/* ================= RESUME CTA ================= */}
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 12 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            border: `1px solid ${COLORS.borderLight}`,
            backgroundColor: COLORS.white,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  mb: 1,
                }}
              >
                Share Your Profile for Future Roles
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  maxWidth: 520,
                }}
              >
                Even if there are no active openings, we regularly review
                profiles when new projects or programs begin.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "right" }}>
              <Button
                startIcon={<MailOutlineIcon />}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: COLORS.accentPrimary,
                  color: COLORS.white,
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2.5,
                  "&:hover": {
                    backgroundColor: COLORS.accentHover,
                  },
                }}
                href="mailto:careers@aapurti.in"
              >
                prashant.parihar@aapurti.in
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

    </Box>
  );
}

/* ================= EMPTY STATE ================= */

function EmptyState() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, md: 6 },
        borderRadius: 4,
        border: `1px dashed ${COLORS.borderStrong}`,
        backgroundColor: COLORS.white,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: COLORS.brandGreenSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLORS.brandGreen,
          mx: "auto",
          mb: 2,
        }}
      >
        <WorkOutlineIcon />
      </Box>

      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.textPrimary,
          mb: 1,
        }}
      >
        No Open Positions Right Now
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          color: COLORS.textSecondary,
          maxWidth: 520,
          mx: "auto",
        }}
      >
        We are not actively hiring at the moment. New opportunities are posted
        as projects scale or program requirements arise.
      </Typography>
    </Paper>
  );
}

/* ================= JOB CARD (FUTURE USE) ================= */

function JobCard({ job }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 3,
        border: `1px solid ${COLORS.borderLight}`,
        backgroundColor: COLORS.white,
        transition: "all 0.25s ease",
        "&:hover": {
          boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.textPrimary,
              mb: 0.5,
            }}
          >
            {job.title}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 18, color: COLORS.textMuted }} />
              <Typography fontSize={13} color={COLORS.textMuted}>
                {job.location}
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem />

            <Typography fontSize={13} color={COLORS.textMuted}>
              {job.type}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} textAlign={{ xs: "left", md: "right" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: COLORS.brandGreen,
              color: COLORS.brandGreen,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: COLORS.brandGreenSoft,
              },
            }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
