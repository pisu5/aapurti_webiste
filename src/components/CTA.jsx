import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
    Button,
} from "@mui/material";
import { COLORS } from "../styles/colors";

export default function CleanCTA() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: COLORS.brandGreen,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    spacing={4}
                    alignItems="center"
                    textAlign="center"
                >
                    {/* HEADLINE */}
                    <Typography
                        sx={{
                            fontSize: { xs: 26, md: 40 },
                            fontWeight: 700,
                            color: COLORS.white,
                            maxWidth: 900,
                            lineHeight: 1.2,
                        }}
                    >
                        Ready to Execute Crop Surveys at Scale?
                    </Typography>

                    {/* SUBTEXT (OPTIONAL, SHORT) */}
                    <Typography
                        sx={{
                            fontSize: { xs: 15, md: 18 },
                            color: "rgba(255,255,255,0.85)",
                            maxWidth: 700,
                        }}
                    >
                        Trusted field execution for PMFBY and large-scale
                        agricultural programs.
                    </Typography>

                    {/* CTA BUTTON */}
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 2,
                            backgroundColor: COLORS.white,
                            color: COLORS.brandGreen,
                            fontWeight: 700,
                            px: { xs: 5, md: 7 },
                            py: 1.8,
                            borderRadius: 999,
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: COLORS.surface,
                            },
                        }}
                    >
                        Request Demo
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
