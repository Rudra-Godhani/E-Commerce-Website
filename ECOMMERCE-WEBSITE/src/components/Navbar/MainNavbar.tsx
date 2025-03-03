import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, styled, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

// const pages = ['Home', 'Shop', 'About', 'Blog', 'Contact', "Pages"];
const pages = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/product/listing" },
  { name: "About", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
]
const MobilePages = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/product/listing" },
  { name: "About", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
  { name: "Login", link: "/login" },
  { name: "Signup", link: "/signup" },
]

const MainNavbar = () => {
  const StyledToolebar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    padding: "12px 0px 8px 0px",
    gap: "40px",
    margin: "0px 30px",
    [theme.breakpoints.down("md")]: {
      gap: "0px",
      margin: "0px 15px",
    },
  }));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const cart = useSelector((state) => state.cart);

  return (
    <AppBar position="sticky" color='#ffffff'>
      <StyledToolebar>
        <Typography variant="h3" sx={{ fontSize: "1.5rem", width: "187px", padding: { xs: "13px 10px 13px 0", md: "13px 28px 13px 0" }, cursor: "pointer", fontWeight: "700" }}>
          Bandage
        </Typography>

        <Box sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", md: "space-between" },
          alignItems: "center",
          width: "100%",
        }}>
          {/* Desktop Navigation */}
          <Box sx={{ gap: "15px", display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.name}
                style={({ isActive }) => ({
                  color: isActive ? "#252B42" : "#737373",
                  fontWeight: isActive ? "700" : "normal",
                  textDecoration: "none",
                  cursor: "pointer",
                  paddingBottom: "4px",
                  borderBottom: isActive ? "2px solid #252B42" : "none",
                })}
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{
            display: "flex",
            alignItems: "center",
            color: "#23A6F0",
          }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, margin: "0 15px", alignItems: "center" }}>
              <PermIdentityIcon sx={{ cursor: "pointer", height: "20px", width: "20px" }} />
              <NavLink to="/login" style={{ textDecoration: "none", color: "#23A6F0" }}>Login</NavLink> /
              <NavLink to="/signup" style={{ textDecoration: "none", color: "#23A6F0" }}>Register</NavLink>
            </Box>

            <SearchIcon sx={{ cursor: "pointer", height: "20px", width: "20px", m: { xs: "0 5px", md: "0 15px" } }} />
            <NavLink to="/shopping-cart" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#23A6F0" }}>
              <ShoppingCartIcon sx={{ cursor: "pointer", height: "20px", width: "20px", m: "0px 5px 0px 15px" }} />
            </NavLink>
            <Typography variant="span" sx={{ mr: "10px" }}>{cart.length}</Typography>
            <FavoriteBorderIcon sx={{ cursor: "pointer", height: "20px", width: "20px", m: "0px 5px 0px 15px" }} />
            <Typography variant="span" sx={{ mr: "10px" }}>1</Typography>
          </Box>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
          <IconButton size="large" onClick={handleDrawerOpen} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </StyledToolebar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 250, p: 2 }}>
          {/* Close Button */}
          <IconButton sx={{ mb: 2 }} onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>

          {/* Drawer Menu List */}
          <List>
            {MobilePages.map((page) => (

              <ListItem
                button
                onClick={handleDrawerClose}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavLink
                  to={page.link}
                  key={page.name}
                  style={({ isActive }) => ({
                    display: "block",
                    color: isActive ? "#252B42" : "#737373",
                    fontWeight: isActive ? "700" : "normal",
                    textDecoration: "none",
                    cursor: "pointer",
                    paddingBottom: "4px",
                    borderBottom: isActive ? "2px solid #252B42" : "none",
                    textAlign: "center",
                  })}
                >
                  <ListItemText
                    primary={page.name}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "20px",
                      },
                    }}
                  />
                </NavLink>
              </ListItem>


            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar >
  );
};

export default MainNavbar;
