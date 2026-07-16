import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Button,
  CssBaseline,
  Menu,
  MenuItem,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { jsPDF } from 'jspdf';
import Module1 from './Modules/Module1';
import Module2 from './Modules/Module2';
import Module3 from './Modules/Module3';
import Module4 from './Modules/Module4';
import Module5 from './Modules/Module5';
import Module6 from './Modules/Module6';
import Module7 from './Modules/Module7';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const API_DATA_ENDPOINT = `${API_BASE_URL}/api/data`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontSize: '1.35rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '0.9rem',
      fontWeight: 700,
      letterSpacing: '0.4px',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '0.85rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.82rem',
      lineHeight: 1.5,
    },
  },
});

const DRAWER_WIDTH = 240;
const LINK_STYLE = { textDecoration: 'none', color: '#1976d2' };

function NavDrawer() {
  const location = useLocation();

  const navEntry = (to, label, Icon) => {
    const active = location.pathname === to;
    return (
      <ListItem
        key={to}
        button
        component={Link}
        to={to}
        sx={{
          py: 0.75,
          px: 2,
          backgroundColor: active ? '#eff6ff' : 'transparent',
          borderLeft: `3px solid ${active ? '#1976d2' : 'transparent'}`,
          '&:hover': { backgroundColor: '#f5f5f5' },
        }}
      >
        <Icon sx={{ mr: 1.5, fontSize: 16, color: active ? '#1976d2' : '#666', flexShrink: 0 }} />
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            variant: 'body2',
            fontSize: '0.82rem',
            fontWeight: active ? 600 : 400,
            color: active ? '#1976d2' : '#444',
          }}
        />
      </ListItem>
    );
  };

  const sectionHead = (text, dimmed = false) => (
    <Box sx={{ px: 2, pt: 2.5, pb: 0.5 }}>
      <Typography
        variant="caption"
        sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: dimmed ? '#ccc' : '#aaa', fontSize: '0.65rem' }}
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ height: '100%', overflowY: 'auto' }}>
      <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #f0f0f0' }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.7rem' }}>
          Markets Unmasked
        </Typography>
      </Box>

      <List dense disablePadding sx={{ mt: 0.5 }}>
        {navEntry('/', 'Home', HomeIcon)}
      </List>

      {sectionHead('Part One — Foundation')}
      <List dense disablePadding>
        {navEntry('/module-1', 'Ch 1: Financial Markets', AccountBalanceIcon)}
        {navEntry('/module-2', 'Ch 2: Fundamental Analysis', ShowChartIcon)}
      </List>

      {sectionHead('Part Two — Reading the Chart')}
      <List dense disablePadding>
        {navEntry('/module-3', 'Ch 3: Charts & Patterns', BarChartIcon)}
        {navEntry('/module-4', 'Ch 4: Trading Identity', TrendingUpIcon)}
      </List>

      {sectionHead('Part Three — Structure & Context')}
      <List dense disablePadding>
        {navEntry('/module-5', 'Ch 5: Market Structure', ShieldIcon)}
        {navEntry('/module-6', 'Ch 6: Price Action & MTA', SmartToyIcon)}
        {navEntry('/module-7', 'Ch 7: Trading Strategies', RocketLaunchIcon)}
      </List>

      {sectionHead('Part Four — Professional Tools', true)}
      <List dense disablePadding>
        {['Ch 8: Inter-Asset Analysis', 'Ch 9: Liquidity', 'Ch 10: Auction Theory', 'Ch 11: Order Flow', 'Ch 12: Logic-Based Trading'].map((label) => (
          <ListItem key={label} sx={{ py: 0.75, px: 2 }}>
            <ListItemText primary={label} primaryTypographyProps={{ variant: 'body2', fontSize: '0.82rem', color: '#ccc' }} />
          </ListItem>
        ))}
      </List>

      {sectionHead('Part Five — Mastery', true)}
      <List dense disablePadding>
        {['Ch 13: Derivatives', 'Ch 14: Risk Management', 'Ch 15: Trading Psychology'].map((label) => (
          <ListItem key={label} sx={{ py: 0.75, px: 2 }}>
            <ListItemText primary={label} primaryTypographyProps={{ variant: 'body2', fontSize: '0.82rem', color: '#ccc' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function Home() {
  const chapters = [
    { num: 1,  to: '/module-1', title: 'Introduction to Financial Markets',        desc: 'The financial system, key players, instruments, global market size, and how trading works.' },
    { num: 2,  to: '/module-2', title: 'Fundamental Analysis',                     desc: 'Financial statements, valuation metrics, macroeconomics, stock selection, and compounding.' },
    { num: 3,  to: '/module-3', title: 'Charts, Patterns & Technical Indicators',  desc: 'Candlesticks, trendlines, chart patterns, Fibonacci, EMA, RSI, MACD, and Bollinger Bands.' },
    { num: 4,  to: '/module-4', title: 'Trading Identity',                         desc: 'Trading styles, timeframe selection, capital expectations, and building your edge.' },
    { num: 5,  to: '/module-5', title: 'Market Structure',                         desc: 'Trends, ranges, HH/HL/LH/LL, CHoCH, order blocks, fair value gaps, and S/R.' },
    { num: 6,  to: '/module-6', title: 'Price Action & Multi-Timeframe Analysis',  desc: 'Market cycles, reading pure price action, MTF alignment, and candle range theory.' },
    { num: 7,  to: '/module-7', title: 'Trading Strategies',                       desc: 'Trend-following, momentum, breakout, mean reversion, reversal, and range setups.' },
    { num: 8,  title: 'Inter-Asset Analysis & Relative Strength' },
    { num: 9,  title: 'Liquidity' },
    { num: 10, title: 'Auction Theory' },
    { num: 11, title: 'Order Flow' },
    { num: 12, title: 'Logic-Based Trading' },
    { num: 13, title: 'Financial Derivatives' },
    { num: 14, title: 'Risk Management' },
    { num: 15, title: 'Trading Psychology' },
  ];

  const F = 'Roboto, Arial, sans-serif';

  return (
    <Container maxWidth="lg" sx={{ pb: 6 }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <Box sx={{ pt: 1, mb: 5 }}>
        <Typography sx={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#1976d2', mb: 1 }}>
          Markets Unmasked
        </Typography>
        <Typography sx={{ fontFamily: F, fontSize: { xs: '1.5rem', sm: '1.9rem' }, fontWeight: 700, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.2, mb: 1.5 }}>
          A Complete Guide to Financial Markets
        </Typography>
        <Typography sx={{ fontFamily: F, fontSize: '0.9rem', color: '#666', maxWidth: 560, lineHeight: 1.7 }}>
          Navigate the 2025–2026 economy with confidence. From market fundamentals to advanced
          trading strategies — structured for beginners and experienced investors alike.
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 3, flexWrap: 'wrap' }}>
          {[['15', 'Chapters'], ['5', 'Parts'], ['7', 'Available now']].map(([n, label]) => (
            <Box key={label}>
              <Typography sx={{ fontFamily: F, fontSize: '1.6rem', fontWeight: 700, color: '#1976d2', lineHeight: 1 }}>{n}</Typography>
              <Typography sx={{ fontFamily: F, fontSize: '0.62rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1.5 }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Chapter grid ─────────────────────────────────────────── */}
      <Box sx={{ mb: 1.5 }}>
        <Typography sx={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#aaa' }}>
          Course Chapters
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 1.5, mb: 6 }}>
        {chapters.map(({ num, to, title, desc }) => {
          const available = Boolean(to);
          return (
            <Box
              key={num}
              component={available ? Link : 'div'}
              to={available ? to : undefined}
              sx={{
                display: 'block',
                textDecoration: 'none',
                borderRadius: '8px',
                border: `1px solid ${available ? '#e8ecf0' : '#f2f2f2'}`,
                backgroundColor: available ? '#fff' : '#fafafa',
                p: 2.25,
                transition: 'box-shadow 0.15s ease, border-color 0.15s ease',
                cursor: available ? 'pointer' : 'default',
                ...(available && { '&:hover': { boxShadow: '0 2px 14px rgba(25,118,210,0.1)', borderColor: '#1976d2' } }),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 700, color: available ? '#1976d2' : '#d0d0d0', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                  {String(num).padStart(2, '0')}
                </Typography>
                {!available && (
                  <Typography sx={{ fontFamily: F, fontSize: '0.58rem', fontWeight: 700, color: '#ccc', textTransform: 'uppercase', letterSpacing: 1, border: '1px solid #e8e8e8', borderRadius: '4px', px: '6px', py: '2px' }}>
                    Soon
                  </Typography>
                )}
              </Box>
              <Typography sx={{ fontFamily: F, fontSize: '0.875rem', fontWeight: 600, color: available ? '#1a1a2e' : '#c8c8c8', lineHeight: 1.35, mb: desc ? 0.75 : 0 }}>
                {title}
              </Typography>
              {desc && (
                <Typography sx={{ fontFamily: F, fontSize: '0.78rem', color: '#999', lineHeight: 1.55 }}>
                  {desc}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>

      {/* ── Bottom info strip ────────────────────────────────────── */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, borderTop: '1px solid #f0f0f0', pt: 4 }}>
        <Box>
          <Typography sx={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#aaa', display: 'block', mb: 1.5 }}>
            What You'll Learn
          </Typography>
          {[
            "Investing basics for today's 2025–2026 market landscape",
            'Stocks, global supply chains, and how tariff policies move prices',
            'Strategies for a volatile, interconnected global economy',
            'Risk management and smart financial decision-making',
          ].map((item) => (
            <Box key={item} sx={{ display: 'flex', gap: 1.25, mb: 1, alignItems: 'flex-start' }}>
              <Box sx={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#1976d2', mt: '7px', flexShrink: 0 }} />
              <Typography sx={{ fontFamily: F, fontSize: '0.875rem', color: '#555', lineHeight: 1.65 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography sx={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#aaa', display: 'block', mb: 1.5 }}>
            How It Works
          </Typography>
          <Typography sx={{ fontFamily: F, fontSize: '0.875rem', color: '#555', lineHeight: 1.7, mb: 1.25 }}>
            Theory, real-world examples, and exercises build on each other across 15 chapters.
            Case studies use live instruments — NVIDIA, VOO, and the S&P 500 — to ground every concept in reality.
          </Typography>
          <Typography sx={{ fontFamily: F, fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
            By the end you'll have the confidence to analyze any market, select a trading style
            that fits your life, and make informed investment decisions.
          </Typography>
        </Box>
      </Box>

    </Container>
  );
}


function App() {
  const { isAuthenticated, user, loginWithRedirect, logout, getAccessTokenSilently, isLoading } = useAuth0();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {};
        if (isAuthenticated) {
          const token = await getAccessTokenSilently();
          headers.Authorization = `Bearer ${token}`;
        }
        const response = await axios.get(API_DATA_ENDPOINT, { headers });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!isLoading) fetchData();
  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

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
    try {
      const doc = new jsPDF();
      doc.text('Fintech 101: Exploring Stock Markets, AI, & the Future of Investing', 10, 10);
      doc.text('This is a sample PDF containing all the course content.', 10, 20);
      doc.save('fintech101.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      handleMenuClose();
    }
  };

  const handleHideData = () => {
    alert('Data hidden for security purposes.');
    handleMenuClose();
  };

  const handleShareLink = async () => {
    try {
      const shareableLink = window.location.href;
      await navigator.clipboard.writeText(shareableLink);
      alert('Link copied to clipboard! Share it with others.');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    } finally {
      handleMenuClose();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#111318', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ marginRight: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 0.5 }} noWrap>
                Fintech 101
              </Typography>
              {!isLoading && (
                isAuthenticated ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 1 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                      {user.name}
                    </Typography>
                    <Button
                      color="inherit"
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap', fontSize: '0.8rem' }}
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    >
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <Button
                    color="inherit"
                    onClick={() => loginWithRedirect()}
                    sx={{ mr: 1, fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.3)', px: 2 }}
                  >
                    Login
                  </Button>
                )
              )}
              <IconButton color="inherit" onClick={handleMenuOpen} sx={{ ml: 0.5 }}>
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
                <MenuItem
                  onClick={async () => {
                    try {
                      const response = await axios.get(API_DATA_ENDPOINT);
                      alert(response.data);
                    } catch (error) {
                      console.error('Error fetching data:', error);
                    }
                    handleMenuClose();
                  }}
                >
                  <ListItemText primary="Fetch Data" />
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', top: '64px', height: 'calc(100% - 64px)' },
            }}
          >
            <NavDrawer />
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', top: '64px', height: 'calc(100% - 64px)', borderRight: '1px solid #ebebeb' },
            }}
            open
          >
            <NavDrawer />
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: 3,
              marginTop: 8,
              marginLeft: { xs: 0, md: `${DRAWER_WIDTH}px` },
              fontFamily: 'Roboto, Arial, sans-serif',
              '& h1': { fontSize: '1.35rem', fontWeight: 700, color: '#1a1a2e', letterSpacing: '-0.01em', lineHeight: 1.3, margin: '0 0 12px' },
              '& h2': { fontSize: '1rem', fontWeight: 700, color: '#1a1a2e', letterSpacing: '0.3px', margin: '24px 0 8px' },
              '& h3': { fontSize: '0.9rem', fontWeight: 600, color: '#333', margin: '20px 0 6px' },
              '& h4': { fontSize: '0.875rem', fontWeight: 600, color: '#444', margin: '16px 0 4px' },
              '& p': { fontSize: '0.875rem', lineHeight: '1.65', color: '#444', margin: '0 0 10px' },
              '& ul, & ol': { paddingLeft: '20px', margin: '0 0 10px' },
              '& li': { fontSize: '0.875rem', lineHeight: '1.65', color: '#444', marginBottom: '4px' },
              '& strong': { fontWeight: 600, color: '#333' },
              '& button': { fontFamily: 'Roboto, Arial, sans-serif' },
              '& a': { color: '#1976d2' },
              '& table': { width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', marginTop: '16px', marginBottom: '24px', fontFamily: 'Roboto, Arial, sans-serif' },
              '& th': { textAlign: 'left', padding: '8px 12px', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '2px solid #e8ecf0', color: '#1a1a2e', backgroundColor: '#fff' },
              '& td': { padding: '7px 12px', borderBottom: '1px solid #f0f0f0', color: '#444' },
              '& tr:nth-of-type(even) td': { backgroundColor: '#fafafa' },
              '& tbody tr:hover td': { backgroundColor: '#eff6ff', transition: 'background 0.1s' },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
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
    </ThemeProvider>
  );
}

export default App;