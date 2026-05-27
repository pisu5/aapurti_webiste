import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Button,
    TextField,
    Paper,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    Divider,
} from "@mui/material";

import {
    PhoneInTalkOutlined,
    EmailOutlined,
    LocationOnOutlined,
    Agriculture,
    Spa,
    Grass,
    Forest,
    PersonOutline,
    BusinessOutlined,
    SendRounded,
} from "@mui/icons-material";

/* =========================================================
   COLORS & THEMING
========================================================= */
const COLORS = {
    primary: "#2E7D32",
    primaryDark: "#1B5E20",
    lightGreen: "#F4FBF2",
    surface: "#FAFAFA",
    border: "#DCE8DC",
    textMain: "#111827",
    textMuted: "#6B7280",
    white: "#FFFFFF",
    gradient: "linear-gradient(135deg, #0F3822 0%, #1E623C 50%, #2E8754 100%)",
};

/* =========================================================
   SERVICES DATA
========================================================= */
const SERVICE_OPTIONS = [
    { value: "cce", label: "CCE Co-Witnessing" },
    { value: "localized", label: "Crop Loss Surveys - Localized Calamity" },
    { value: "post-harvest", label: "Crop Loss Surveys – Post-Harvest" },
    { value: "enrolment-qc", label: "QC of PMFBY Enrollment Applications" },
    { value: "form-qc", label: "QC of Survey Forms" },
    { value: "health", label: "Crop Health Monitoring" },
    { value: "other", label: "Other Agricultural Survey & Rural Operations" },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */
export default function AgroContactForm() {
    const [service, setService] = useState("");

    return (
        <Box
            sx={{
                py: { xs: 6, sm: 10, md: 14 },
                px: { xs: 2, sm: 4, md: 0 },
                background: "linear-gradient(to bottom, #F8FCF6 0%, #EDF6EB 100%)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="lg" disableGutters>
                <Paper
                    elevation={0}
                    sx={{
                        overflow: "hidden",
                        borderRadius: { xs: "24px", md: "32px" },
                        border: `1px solid ${COLORS.border}`,
                        boxShadow: "0 24px 64px -12px rgba(46, 125, 50, 0.1)",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* =========================================================
                        LEFT SIDE: BRANDING & INFO
                    ========================================================= */}
                    <Box
                        sx={{
                            flex: { md: "0 0 42%" },
                            position: "relative",
                            overflow: "hidden",
                            background: COLORS.gradient,
                            color: COLORS.white,
                            p: { xs: 4, sm: 6, md: 7 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Decorative Background Elements */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: 400,
                                height: 400,
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                                top: -150,
                                right: -150,
                            }}
                        />

                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Chip
                                icon={<Spa sx={{ color: "white !important", fontSize: "16px !important" }} />}
                                label="Agricultural Intelligence"
                                sx={{
                                    mb: 4,
                                    background: "rgba(255,255,255,0.15)",
                                    backdropFilter: "blur(10px)",
                                    color: COLORS.white,
                                    fontWeight: 600,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    py: 2.5,
                                }}
                            />

                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: 32, sm: 40, md: 46 },
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                    mb: 3,
                                }}
                            >
                                Smarter Crop Surveys & Field Operations
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.85)",
                                    lineHeight: 1.7,
                                    fontSize: { xs: 15, md: 16 },
                                    mb: 5,
                                    maxWidth: 400,
                                }}
                            >
                                Helping organizations streamline PMFBY operations, agricultural audits, and rural field execution across India.
                            </Typography>

                            {/* Stats */}
                            <Stack spacing={2.5} sx={{ mb: 6 }}>
                                <StatCard icon={<Agriculture />} text="500K+ Farmer Surveys Completed" />
                                <StatCard icon={<Forest />} text="120+ District-Level Operations" />
                                <StatCard icon={<Grass />} text="Trusted PMFBY Survey Experts" />
                            </Stack>
                        </Box>

                        {/* Contact Info Footer */}
                        <Box sx={{ position: "relative", zIndex: 2, mt: "auto" }}>
                            <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 4 }} />
                            <Stack spacing={3}>
                                <ContactItem icon={<PhoneInTalkOutlined />} title="Call Us" value="+91" />
                                <ContactItem icon={<EmailOutlined />} title="Email Support" value="services@aapurti.in" />
                            </Stack>
                        </Box>
                    </Box>

                    {/* =========================================================
                        RIGHT SIDE: FORM
                    ========================================================= */}
                    <Box
                        sx={{
                            flex: { md: "1 1 auto" },
                            background: COLORS.white,
                            p: { xs: 4, sm: 6, md: 7 },
                        }}
                    >
                        <Box sx={{ mb: 5 }}>
                            <Typography
                                sx={{
                                    color: COLORS.primary,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    fontSize: 13,
                                    mb: 1,
                                }}
                            >
                                Get Started
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 28, sm: 36 },
                                    fontWeight: 800,
                                    color: COLORS.textMain,
                                    mb: 2,
                                }}
                            >
                                Request a Consultation
                            </Typography>
                            <Typography sx={{ color: COLORS.textMuted, fontSize: 16 }}>
                                Share your project details, and our agricultural experts will reach out to tailor a solution for you.
                            </Typography>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <InputField label="Full Name" placeholder="John Doe" icon={<PersonOutline />} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputField label="Email Address" placeholder="john@example.com" type="email" icon={<EmailOutlined />} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputField label="Phone Number" placeholder="+91 98765 43210" type="tel" icon={<PhoneInTalkOutlined />} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputField label="Organization" placeholder="Company Name" icon={<BusinessOutlined />} />
                            </Grid>

                            {/* Services Dropdown */}
                            <Grid item xs={12}>
                                <FormControl fullWidth sx={formFieldStyle}>
                                    <InputLabel>Select Agricultural Service</InputLabel>
                                    <Select
                                        value={service}
                                        label="Select Agricultural Service"
                                        onChange={(e) => setService(e.target.value)}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    mt: 1,
                                                    borderRadius: "16px",
                                                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                                                },
                                            },
                                        }}
                                        sx={{
                                            "& .MuiSelect-select": { display: "flex", alignItems: "center" },
                                        }}
                                    >
                                        {SERVICE_OPTIONS.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                                sx={{
                                                    py: 1.5,
                                                    borderRadius: "8px",
                                                    mx: 1,
                                                    mb: 0.5,
                                                    "&:hover": { backgroundColor: COLORS.lightGreen },
                                                    "&.Mui-selected": { backgroundColor: "rgba(46, 125, 50, 0.08)" },
                                                }}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Text Area */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Project Details"
                                    placeholder="Briefly describe your survey, audit, or field operation requirements..."
                                    variant="outlined"
                                    sx={formFieldStyle}
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    endIcon={<SendRounded />}
                                    sx={{
                                        py: 2,
                                        borderRadius: "16px",
                                        backgroundColor: COLORS.primary,
                                        fontWeight: 700,
                                        fontSize: 16,
                                        textTransform: "none",
                                        boxShadow: "0 8px 24px rgba(46,125,50,0.25)",
                                        transition: "all 0.2s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: COLORS.primaryDark,
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 12px 32px rgba(46,125,50,0.35)",
                                        },
                                    }}
                                >
                                    Submit Request
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

/* =========================================================
   SUB-COMPONENTS
========================================================= */

function InputField({ label, placeholder, type = "text", icon }) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            label={label}
            placeholder={placeholder}
            type={type}
            InputProps={{
                startAdornment: icon ? (
                    <InputAdornment position="start" sx={{ color: "text.secondary" }}>
                        {icon}
                    </InputAdornment>
                ) : null,
            }}
            sx={formFieldStyle}
        />
    );
}

function ContactItem({ icon, title, value }) {
    return (
        <Stack direction="row" spacing={2.5} alignItems="center">
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                }}
            >
                {icon}
            </Box>
            <Box>
                <Typography sx={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5 }}>
                    {title}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 16 }}>{value}</Typography>
            </Box>
        </Stack>
    );
}

function StatCard({ icon, text }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                p: 2,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.2s",
                "&:hover": { background: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
            }}
        >
            <Box
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1)",
                }}
            >
                {icon}
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 15, color: "white" }}>{text}</Typography>
        </Box>
    );
}

/* =========================================================
   SHARED STYLES
========================================================= */
const formFieldStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "16px",
        backgroundColor: COLORS.surface,
        transition: "all 0.2s ease",
        "& fieldset": {
            borderColor: COLORS.border,
            borderWidth: "1px",
        },
        "&:hover": {
            backgroundColor: "#fff",
        },
        "&:hover fieldset": {
            borderColor: COLORS.primary,
        },
        "&.Mui-focused fieldset": {
            borderColor: COLORS.primary,
            borderWidth: "2px",
        },
    },
    "& .MuiInputLabel-root": {
        color: COLORS.textMuted,
        "&.Mui-focused": {
            color: COLORS.primary,
            fontWeight: 600,
        },
    },
};