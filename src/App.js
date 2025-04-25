import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton, Tooltip, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import Module1 from './Modules/Module1';
import Module2 from './Modules/Module2';
import Module3 from './Modules/Module3';
import Module4 from './Modules/Module4';
import Module5 from './Modules/Module5';

function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Stock Market Basics Course
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This course is designed to introduce you to the fundamentals of investing and the stock market. 
        Whether you're a beginner or looking to refresh your knowledge, this course will provide you with the tools and insights you need to make informed investment decisions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        What You'll Learn:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            The basics of investing and how to get started.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Understanding stocks and how the stock market works.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Key investment strategies to grow your wealth.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            How to manage risks and make smart financial decisions.
          </Typography>
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        How to Navigate:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use the navigation bar on the left to explore the modules. Each module covers a specific topic, starting with the basics and progressing to more advanced concepts. 
        You can also access the "Activities" section for hands-on exercises and the "Help" section for additional support.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Get Started:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click on "Module 1: Introduction to Investing" in the navigation bar to begin your journey into the world of investing!
      </Typography>
    </Container>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for expanded/collapsed drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerPin = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: drawerOpen ? 240 : 72, padding: 2 }}>
      <List>
        <Tooltip title="Home" placement="right" arrow>
          <ListItem button component={Link} to="/" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">1</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Home" />}
          </ListItem>
        </Tooltip>
        <Tooltip title="Module 1" placement="right" arrow>
          <ListItem button component={Link} to="/module-1" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">2</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Module 1" />}
          </ListItem>
        </Tooltip>
        <Tooltip title="Module 2" placement="right" arrow>
          <ListItem button component={Link} to="/module-2" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">3</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Module 2" />}
          </ListItem>
        </Tooltip>
        <Tooltip title="Module 3" placement="right" arrow>
          <ListItem button component={Link} to="/module-3" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">4</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Module 3" />}
          </ListItem>
        </Tooltip>
        <Tooltip title="Module 4" placement="right" arrow>
          <ListItem button component={Link} to="/module-4" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">5</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Module 4" />}
          </ListItem>
        </Tooltip>
        <Tooltip title="Module 5" placement="right" arrow>
          <ListItem button component={Link} to="/module-5" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <Typography variant="h6">6</Typography>
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Module 5" />}
          </ListItem>
        </Tooltip>
      </List>
    </Box>
  );

  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Stock Market Basics Course
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </Toolbar>
        </AppBar>

        {/* Left Navigation Drawer */}
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerOpen ? 240 : 72,
              boxSizing: 'border-box',
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            marginLeft: isMobile ? 0 : drawerOpen ? 240 : 72,
            padding: 2,
            paddingTop: theme.spacing(8), // Adjust for AppBar height
          }}
        >
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/module-1" element={<Module1 />} />
              <Route path="/module-2" element={<Module2 />} />
              <Route path="/module-3" element={<Module3 />} />
              <Route path="/module-4" element={<Module4 />} />
              <Route path="/module-5" element={<Module5 />} />
            </Routes>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;