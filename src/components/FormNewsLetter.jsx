import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsletterSubscribe() {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    // Redirect to home after success
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                navigate("/"); // home route
            }, 2500); // 2.5 seconds delay

            return () => clearTimeout(timer);
        }
    }, [submitted, navigate]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                px: 2,
            }}
        >
            {!submitted ? (
                <Paper
                    elevation={4}
                    sx={{
                        width: "100%",
                        maxWidth: 420,
                        p: 4,
                        borderRadius: 3,
                    }}
                    component="form"
                    action="https://3e0e5d7f.sibforms.com/serve/MUIFAFLYvzE4sqKfzfe1mxXtMmNFRbbaMVYdXjq1nEoUYyNbH9_fhfeGmli89MkoFqH6HSWl-8SuDoOATVdNVioIgdL9-xKk2lzOpHiXT6FqTgy7j_HPCUwZTHbqAO9b7OkhVE3TpI-Yjshbbr4RAQ30qoJjaBFLC_LDM9kWJHpiuPVJY8EK1s-Lwmv-8LxOQSVtOzy1176QXSlE5Q=="
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                >
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        textAlign="center"
                        gutterBottom
                    >
                        Subscribe to our Newsletter
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                        mb={3}
                    >
                        Get the latest blogs, news, and updates directly in your inbox.
                    </Typography>

                    <TextField
                        fullWidth
                        required
                        type="email"
                        name="EMAIL"
                        label="Email address"
                        placeholder="you@example.com"
                        sx={{ mb: 3 }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                            textTransform: "none",
                            fontWeight: 600,
                            py: 1.2,
                        }}
                    >
                        Subscribe
                    </Button>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        textAlign="center"
                        mt={2}
                    >
                        No spam. Unsubscribe anytime.
                    </Typography>
                </Paper>
            ) : (
                <Paper
                    elevation={3}
                    sx={{
                        p: 5,
                        borderRadius: 3,
                        textAlign: "center",
                        maxWidth: 420,
                    }}
                >
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Thank you for subscribing!
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        You’ll be redirected to the home page shortly.
                    </Typography>
                </Paper>
            )}
        </Box>
    );
}
