import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import video from '../assets/video.mp4';
import { COLORS } from '../styles/colors';

export default function VideoHeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: { xs: '85vh', md: '90vh' },
        minHeight: 560,
        pt: '64px', // matches MUI AppBar height
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Video */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </Box>

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(15,23,42,0.75), rgba(15,23,42,0.55), rgba(15,23,42,0.25))',
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            variant="h2"
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 2,
              fontSize: {
                xs: '2.25rem',
                sm: '2.75rem',
                md: '3.25rem',
              },
            }}
          >
            Transforming Agricultural Insurance.
            <br />
           Through Innovation and Excellence
          </Typography>

          <Typography
            sx={{
              color: COLORS.surfaceMuted,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mb: 4,
              maxWidth: 560,
            }}
          >
            Aapurti Agribusiness System promises to bring major chnages to India's
            agricultural insurance scene through its modern approach and new area of service.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: COLORS.accentPrimary,
                color: COLORS.white,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: COLORS.accentHover,
                },
              }}
            >
              Explore Services
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: COLORS.white,
                color: COLORS.white,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  borderColor: COLORS.surfaceMuted,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
