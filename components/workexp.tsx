// components/WorkExp.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { Work as WorkIcon } from '@mui/icons-material';

const WorkExp: React.FC = () => {
  return (
    <>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e', mt: 6, mb: 6 }}>
        Work Experience
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {/* Work Experience 1 */}
        <Card
          sx={{
            flex: 1,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.6)', // Enhanced subtle shadow
            '&:hover': {
              boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.8)', // Deeper shadow on hover
              transform: 'translateY(-5px)',
              transition: '0.3s ease-in-out',
            },
            border: '1px solid #e0e0e0', // Lighter border for a clean look
            backgroundColor: '#fafafa', // Elegant light background color
            padding: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              <WorkIcon sx={{ marginRight: 1 }} /> HTML Developer Trainee - Weavers Web Academy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duration: 7 months
            </Typography>
            <Divider sx={{ margin: '10px 0' }} />
            <Typography variant="body1" sx={{ color: '#444' }}>
              Gained hands-on experience in HTML, CSS, and web development practices.
            </Typography>
          </CardContent>
        </Card>

        {/* Work Experience 2 */}
        <Card
          sx={{
            flex: 1,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.6)', // Enhanced subtle shadow
            '&:hover': {
              boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.8)', // Deeper shadow on hover
              transform: 'translateY(-5px)',
              transition: '0.3s ease-in-out',
            },
            border: '1px solid #e0e0e0', // Lighter border for a clean look
            backgroundColor: '#fafafa', // Elegant light background color
            padding: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              <WorkIcon sx={{ marginRight: 1 }} /> Doing Internship As A HTML Developer  - Zediant Technologies Pvt. Ltd.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duration: 3 months
            </Typography>
            <Divider sx={{ margin: '10px 0' }} />
            <Typography variant="body1" sx={{ color: '#444' }}>
              Assisted in front-end web development projects, working on HTML5 and CSS3.
            </Typography>
          </CardContent>
        </Card>

        {/* Work Experience 3 */}
        <Card
          sx={{
            flex: 1,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.6)', // Enhanced subtle shadow
            '&:hover': {
              boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.8)', // Deeper shadow on hover
              transform: 'translateY(-5px)',
              transition: '0.3s ease-in-out',
            },
            border: '1px solidrgb(184, 184, 184)', // Lighter border for a clean look
            backgroundColor: '#fafafa', // Elegant light background color
            padding: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              <WorkIcon sx={{ marginRight: 1 }} /> React.js Trainee - Webskitters Academy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duration: 9 months
            </Typography>
            <Divider sx={{ margin: '10px 0' }} />
            <Typography variant="body1" sx={{ color: '#444' }}>
              Developed interactive web applications using Adv js, React js, Next js, including state management with Redux and Zustand.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default WorkExp;
