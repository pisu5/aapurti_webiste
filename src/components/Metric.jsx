import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { COLORS } from "../styles/colors";

/* ---------- Counter Hook ---------- */
const useCounter = (end, duration = 2200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return value.toLocaleString();
};

/* ---------- Data ---------- */
const METRICS = [
   {
    label: "Localized and Post-Harvest Surveys ",
    value: 386000,
    suffix: "+",
    icon: MapOutlinedIcon,
    color: COLORS.techBlueGray,
    surface: COLORS.techBlueSoft,
    description: "Geo-verified land boundary surveys across regions.",
  },
  {
    label: "CHM Completed",
    value: 50000,
    suffix: "+",
    icon: MapOutlinedIcon,
    color: COLORS.techBlueGray,
    surface: COLORS.techBlueSoft,
    description: "Geo-verified land boundary surveys across regions.",
  },
  {
    label: "CCEs Co-witnessed",
    value: 150000,
    suffix: "+",
    icon: AgricultureOutlinedIcon,
    color: COLORS.brandGreen,
    surface: COLORS.brandGreenSoft,
    description: "Large-scale agricultural field coverage.",
  },
  {
    label: "Application Audited",
    value: 1000000,
    suffix: "+",
    icon: VerifiedOutlinedIcon,
    color: COLORS.accentPrimary,
    surface: COLORS.earthBrownSoft,
    description: "Accurate crop assessment and yield estimation.",
  },
  {
    label: "Data Accuracy",
    value: 99,
    suffix: "%",
    icon: SecurityOutlinedIcon,
    color: COLORS.earthBrown,
    surface: COLORS.earthBrownSoft,
    description: "Quality-controlled and audit-ready field data.",
  },
];

export default function MetricsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: COLORS.surfaceMuted,
      }}
    >
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box mb={8}>
          <Divider
            sx={{
              width: 72,
              height: 4,
              backgroundColor: COLORS.brandGreen,
              borderRadius: 2,
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: COLORS.textPrimary,
              mb: 1,
            }}
          >
            Impressive Track Record Across the nation
          </Typography>

          <Typography
            sx={{
              color: COLORS.textSecondary,
              maxWidth: 640,
            }}
          >
            Measurable outcomes delivered through verified surveys,
            disciplined field operations, and data-first execution.
          </Typography>
        </Box>

        {/* Metrics */}
        <Grid container spacing={4}>
          {METRICS.map((item, index) => {
            const count = useCounter(item.value);
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    backgroundColor: item.surface,
                    border: `1px solid ${COLORS.borderLight}`,
                    transition: "transform 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2.5,
                        backgroundColor: COLORS.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ color: item.color }} />
                    </Box>

                    {/* Label */}
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: COLORS.textSecondary,
                        mb: 1,
                      }}
                    >
                      {item.label}
                    </Typography>

                    {/* Value */}
                    <Typography
                      sx={{
                        fontSize: 36,
                        fontWeight: 800,
                        color: COLORS.textPrimary,
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      {count}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: 18,
                          fontWeight: 700,
                          ml: 0.5,
                          color: item.color,
                        }}
                      >
                        {item.suffix}
                      </Typography>
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: COLORS.textMuted,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA */}
        <Box mt={10} textAlign="center">
          <Button
            size="large"
            sx={{
              backgroundColor: COLORS.accentPrimary,
              color: COLORS.textPrimary,
              fontWeight: 700,
              px: 7,
              py: 2,
              borderRadius: 3,
              "&:hover": {
                backgroundColor: COLORS.accentHover,
              },
            }}
          >
            View Detailed Case Studies
          </Button>
        </Box>

      </Container>
    </Box>
  );
}
