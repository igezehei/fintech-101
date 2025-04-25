import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Box, CssBaseline, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ShareIcon from '@mui/icons-material/Share';
import { jsPDF } from 'jspdf';
import Module1 from './Modules/Module1';
import Module2 from './Modules/Module2';
import Module3 from './Modules/Module3';
import Module4 from './Modules/Module4';
import Module5 from './Modules/Module5';
import Module6 from './Modules/Module6';
import Module7 from './Modules/Module7';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Module 1
import ShowChartIcon from '@mui/icons-material/ShowChart'; // For Module 2
import BarChartIcon from '@mui/icons-material/BarChart'; // For Module 3
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // For Module 4
import ShieldIcon from '@mui/icons-material/Shield'; // For Module 5
import SmartToyIcon from '@mui/icons-material/SmartToy'; // For Module 6
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // For Module 7

function Home() {
  return (
    <Container>
      {/* Section 1: Introduction */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          This course is designed to introduce you to the fundamentals of investing and the stock market. 
          Whether you're a beginner or looking to refresh your knowledge, this course will provide you with the tools and insights you need to make informed investment decisions.
        </Typography>
      </Box>

      {/* Section 2: What You'll Learn */}
      <Box sx={{ marginBottom: 4 }}>
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
      </Box>

      {/* Section 3: Methodology */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Methodology:
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          This course uses a combination of theoretical concepts, real-world examples, and interactive exercises to help you understand the fundamentals of investing. 
          Each module is designed to build on the previous one, ensuring a comprehensive learning experience.
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          You'll explore case studies, analyze market trends, and apply what you've learned through practical exercises. By the end of the course, you'll have the confidence to make informed investment decisions.
        </Typography>
      </Box>

      {/* Section 4: Exercises */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Exercises:
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          1. Research three companies you're interested in and find their stock prices. Track their performance over a week and analyze the trends.<br />
          2. Create a mock investment portfolio with $10,000. Allocate funds to different sectors (e.g., technology, healthcare, finance) and calculate potential returns over a year.<br />
          3. Identify a recent market event (e.g., a company announcement or economic news) and explain how it impacted stock prices.
        </Typography>
      </Box>

      {/* Section 5: Course Modules */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Course Modules:
        </Typography>
        <ul>
          <li>
            <Link to="/module-1" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 1: Introduction to Investing
            </Link>
          </li>
          <li>
            <Link to="/module-2" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 2: Understanding Stocks
            </Link>
          </li>
          <li>
            <Link to="/module-3" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 3: Stock Market Basics
            </Link>
          </li>
          <li>
            <Link to="/module-4" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 4: Investment Strategies
            </Link>
          </li>
          <li>
            <Link to="/module-5" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 5: Risk Management
            </Link>
          </li>
          <li>
            <Link to="/module-6" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 6: AI in Stock Markets
            </Link>
          </li>
          <li>
            <Link to="/module-7" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Module 7: The Future of Investing
            </Link>
          </li>
        </ul>
      </Box>
    </Container>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.text('Fintech 101: Exploring Stock Markets, AI, & the Future of Investing', 10, 10);
    doc.text('This is a sample PDF containing all the course content.', 10, 20);
    doc.save('fintech101.pdf');
    handleMenuClose();
  };

  const handleHideData = () => {
    alert('Data hidden for security purposes.');
    handleMenuClose();
  };

  const handleShareLink = () => {
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink);
    alert('Link copied to clipboard! Share it with others.');
    handleMenuClose();
  };

  const drawerWidth = 240;

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <List>
        {/* Home */}
        <ListItem button component={Link} to="/">
          <HomeIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Home" />
        </ListItem>

        {/* Module 1: Introduction to Investing */}
        <ListItem button component={Link} to="/module-1">
          <AccountBalanceIcon sx={{ marginRight: 2 }} /> {/* Represents finance and investing */}
          <ListItemText primary="Module 1: Introduction to Investing" />
        </ListItem>

        {/* Module 2: Understanding Stocks */}
        <ListItem button component={Link} to="/module-2">
          <ShowChartIcon sx={{ marginRight: 2 }} /> {/* Represents stock market trends */}
          <ListItemText primary="Module 2: Understanding Stocks" />
        </ListItem>

        {/* Module 3: Stock Market Basics */}
        <ListItem button component={Link} to="/module-3">
          <BarChartIcon sx={{ marginRight: 2 }} /> {/* Represents stock market basics */}
          <ListItemText primary="Module 3: Stock Market Basics" />
        </ListItem>

        {/* Module 4: Investment Strategies */}
        <ListItem button component={Link} to="/module-4">
          <TrendingUpIcon sx={{ marginRight: 2 }} /> {/* Represents growth and strategies */}
          <ListItemText primary="Module 4: Investment Strategies" />
        </ListItem>

        {/* Module 5: Risk Management */}
        <ListItem button component={Link} to="/module-5">
          <ShieldIcon sx={{ marginRight: 2 }} /> {/* Represents protection and risk management */}
          <ListItemText primary="Module 5: Risk Management" />
        </ListItem>

        {/* Module 6: AI in Stock Markets */}
        <ListItem button component={Link} to="/module-6">
          <SmartToyIcon sx={{ marginRight: 2 }} /> {/* Represents AI and technology */}
          <ListItemText primary="Module 6: AI in Stock Markets" />
        </ListItem>

        {/* Module 7: The Future of Investing */}
        <ListItem button component={Link} to="/module-7">
          <RocketLaunchIcon sx={{ marginRight: 2 }} /> {/* Represents innovation and the future */}
          <ListItemText primary="Module 7: The Future of Investing" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {/* Website Title */}
            <Typography variant="h6" sx={{ flexGrow: 1 }} noWrap>
              Fintech 101
            </Typography>
            {/* Always Visible Home Button */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
            </Link>
            {/* Dropdown Menu */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleGeneratePDF}>
                <PictureAsPdfIcon sx={{ marginRight: 2 }} />
                Generate PDF
              </MenuItem>
              <MenuItem onClick={handleHideData}>
                <VisibilityOffIcon sx={{ marginRight: 2 }} />
                Hide Data
              </MenuItem>
              <MenuItem onClick={handleShareLink}>
                <ShareIcon sx={{ marginRight: 2 }} />
                Share Link
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawerContent}
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: 8,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module-1" element={<Module1 />} />
            <Route path="/module-2" element={<Module2 />} />
            <Route path="/module-3" element={<Module3 />} />
            <Route path="/module-4" element={<Module4 />} />
            <Route path="/module-5" element={<Module5 />} />
            <Route path="/module-6" element={<Module6 />} />
            <Route path="/module-7" element={<Module7 />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;