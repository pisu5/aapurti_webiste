import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

import AgricultureIcon from "@mui/icons-material/Agriculture";
import MapIcon from "@mui/icons-material/Map";
import ScienceIcon from "@mui/icons-material/Science";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { COLORS } from "../styles/colors";

/* ===== DATA ===== */
const DATA = [
  { year: "2021", crops: 120, land: 80, soil: 50 },
  { year: "2022", crops: 160, land: 120, soil: 70 },
  { year: "2023", crops: 220, land: 140, soil: 90 },
  { year: "2024", crops: 310, land: 200, soil: 110 },
  { year: "2025", crops: 280, land: 190, soil: 150 },
];

const totals = DATA.reduce(
  (a, b) => ({
    crops: a.crops + b.crops,
    land: a.land + b.land,
    soil: a.soil + b.soil,
  }),
  { crops: 0, land: 0, soil: 0 }
);

const grandTotal = totals.crops + totals.land + totals.soil;

/* ===== TOOLTIP ===== */
const TooltipClean = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <Paper
      sx={{
        p: 1.5,
        borderRadius: 2,
        background: COLORS.white,
        border: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <Typography fontSize={12} fontWeight={600} color={COLORS.textPrimary}>
        {label}
      </Typography>
      {payload.map((p) => (
        <Typography key={p.name} fontSize={12} sx={{ color: p.color }}>
          {p.name}: <b>{p.value}</b>
        </Typography>
      ))}
    </Paper>
  );
};

export default function AnalyticsUpdated() {
  return (
    <Box sx={{ background: COLORS.surface, py: 6 }}>
      <Container maxWidth="xl">

        {/* HEADER */}
        <Box mb={4}>
          <Typography
            fontSize={30}
            fontWeight={800}
            color={COLORS.textPrimary}
          >
            Survey Analytics
          </Typography>
          <Typography color={COLORS.textSecondary}>
            Year-wise growth across survey categories
          </Typography>
        </Box>

        {/* KPI GRID */}
        <Grid container spacing={3} mb={4}>
          <KPICard
            icon={<AgricultureIcon />}
            label="Crop Surveys"
            value={totals.crops}
            color={COLORS.brandGreen}
          />
          <KPICard
            icon={<MapIcon />}
            label="Land Surveys"
            value={totals.land}
            color={COLORS.techBlueGray}
          />
          <KPICard
            icon={<ScienceIcon />}
            label="Soil Analysis"
            value={totals.soil}
            color={COLORS.earthBrown}
          />
          <KPICard
            icon={<TrendingUpIcon />}
            label="Total Surveys"
            value={grandTotal}
            color={COLORS.accentPrimary}
          />
        </Grid>

        {/* CHART */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            background: COLORS.white,
            border: `1px solid ${COLORS.borderLight}`,
          }}
        >
          <Typography
            fontWeight={700}
            color={COLORS.textPrimary}
            mb={2}
          >
            5-Year Trend
          </Typography>

          <Box sx={{ height: { xs: 260, md: 360 } }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DATA}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={COLORS.borderLight}
                />
                <XAxis dataKey="year" tick={{ fill: COLORS.textMuted }} />
                <YAxis tick={{ fill: COLORS.textMuted }} />
                <Tooltip content={<TooltipClean />} />

                <Line
                  type="monotone"
                  dataKey="crops"
                  stroke={COLORS.brandGreen}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="land"
                  stroke={COLORS.techBlueGray}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="soil"
                  stroke={COLORS.earthBrown}
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

      </Container>
    </Box>
  );
}

/* ===== KPI CARD ===== */
function KPICard({ icon, label, value, color }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        sx={{
          p: 2.5,
          borderRadius: 3,
          background: COLORS.white,
          border: `1px solid ${COLORS.borderLight}`,
        }}
      >
        <Stack spacing={1}>
          <Box sx={{ color }}>{icon}</Box>
          <Typography fontSize={13} color={COLORS.textMuted}>
            {label}
          </Typography>
          <Typography fontSize={24} fontWeight={800} color={COLORS.textPrimary}>
            {value}
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
}
