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
    CheckCircleOutline,
    FactCheck,
    ContentPasteSearch,
    DashboardCustomize,
    HistoryEdu,
    LibraryAddCheck,
} from "@mui/icons-material";
import { COLORS } from "../styles/colors";

/* ================= SERVICE 05: PMFBY ENROLMENT QC ================= */
export function EnrolmentQC() {
    const stats = [
        { label: "Apps Verified", value: "13.75M+" },
        { label: "States Integrated", value: "12+" },
        { label: "Data Accuracy", value: "99.8%" },
        { label: "Duplicate Rejection", value: "14%" },
    ];

    return (
        <Box sx={{ backgroundColor: COLORS.surface, py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: COLORS.accentPrimary, fontWeight: 800, mb: 1, letterSpacing: 2 }}>
                            SERVICE 05
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 32, md: 44 }, fontWeight: 800, lineHeight: 1.1, mb: 3 }}>
                            QC of PMFBY <br />
                            <span style={{ color: COLORS.accentPrimary }}>Enrolment Applications</span>
                        </Typography>
                        <Typography sx={{ color: COLORS.textSecondary, fontSize: 17, lineHeight: 1.7, mb: 4 }}>
                            Rigorous multi-stage quality control for farmer enrollment data

                            Our comprehensive enrollment data verification service ensures PMFBY compliance through automated checks, land record matching via state bhulekh portals, tenant/sharecropper document validation, duplicate detection, and area correction protocols. With 13.75M+ applications verified, we deliver accuracy at scale with strict policy compliance.

                        </Typography>

                        <Stack spacing={2}>
                            {["Land record matching via Bhulekh portals", "Tenant/Sharecropper document validation", "Area correction & Duplicate detection"].map((text, i) => (
                                <Stack key={i} direction="row" spacing={2} alignItems="center">
                                    <CheckCircleOutline sx={{ color: COLORS.accentPrimary, fontSize: 20 }} />
                                    <Typography sx={{ fontWeight: 600 }}>{text}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: `1px solid ${COLORS.borderLight}`, background: `linear-gradient(135deg, #fff 0%, ${COLORS.brandGreenSoft} 100%)` }}>
                            <Grid container spacing={3}>
                                {stats.map((s, i) => (
                                    <Grid item xs={6} key={i}>
                                        <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.textPrimary }}>{s.value}</Typography>
                                        <Typography sx={{ fontSize: 12, fontWeight: 700, color: COLORS.accentPrimary, textTransform: "uppercase" }}>{s.label}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider sx={{ my: 3 }} />
                            <Typography sx={{ fontSize: 14, fontStyle: "italic", color: COLORS.textSecondary }}>
                                "Delivering accuracy at scale with strict policy compliance for India's largest insurers."
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

/* ================= SERVICE 06: SURVEY FORMS QC ================= */
export function SurveyFormsQC() {
    const workflows = [
        { title: "Multi-layer Validation", text: "Automated rules to flag SOP deviations instantly.", icon: <FactCheck /> },
        { title: "Analyst Cross-check", text: "Dedicated specialists verify field parameters and media.", icon: <ContentPasteSearch /> },
        { title: "Audit-ready Trails", text: "Structured logs for every correction made to the data.", icon: <HistoryEdu /> },
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, background: `linear-gradient(180deg, ${COLORS.surface} 0%, ${COLORS.brandGreenSoft} 100%)` }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography sx={{ color: COLORS.accentPrimary, fontWeight: 800, mb: 1 }}>SERVICE 06</Typography>
                    <Typography sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 800, mb: 2 }}>
                        QC of Localized or Post Harvest Survey Forms
                    </Typography>
                    <Typography sx={{ color: COLORS.textSecondary, maxWidth: 700, mx: "auto" }}>
                        Systematic verification of crop loss assessment documentation

                        Our QC framework for localized and post-harvest survey forms ensures data integrity through multi-layer validation rules, field-level verification, and structured audit trails. Dedicated analysts cross-check survey parameters against SOP requirements—delivering insurer-ready, audit-compliant documentation.

                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {workflows.map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4, height: "100%", borderRadius: 4, textAlign: "center",
                                    border: `1px solid ${COLORS.borderLight}`, backgroundColor: "white",
                                    transition: "0.3s", "&:hover": { transform: "translateY(-8px)", borderColor: COLORS.accentPrimary }
                                }}
                            >
                                <Box sx={{ color: COLORS.accentPrimary, fontSize: 48, mb: 2 }}>{item.icon}</Box>
                                <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 2 }}>{item.title}</Typography>
                                <Typography sx={{ color: COLORS.textSecondary }}>{item.text}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, p: 4, backgroundColor: COLORS.white, borderRadius: 4, border: `1px dashed ${COLORS.accentPrimary}`, textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 700, color: COLORS.textPrimary }}>
                        Providing insurer-ready, audit-compliant documentation for seamless claim settlement.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}