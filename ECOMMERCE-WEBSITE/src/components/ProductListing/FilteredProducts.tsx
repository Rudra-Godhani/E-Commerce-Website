import { Filter } from '@mui/icons-material'
import { Box, Button, Container, Divider, Drawer, List, Menu, MenuItem, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react'
import { featuredData } from '../../Data';
import usePagination from '@mui/material/usePagination/usePagination';
import FilterListIcon from '@mui/icons-material/FilterList';
import Filters from './Filters';


const FilteredProducts = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const { items } = usePagination({
    count: 10,
  });

  return (
    <Box sx={{ px: "20px" }}>
      <Stack sx={{ flexDirection: "row" }} justifyContent={"space-between"}>
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant='h3' color='secondary'>Mens's Clothing</Typography>
          <Typography variant='h6' color='gray'>Seo text will be here</Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row", width: { xs: "100%", md: "100%" } }} alignItems={"center"} gap={"10px"}>

          <Typography variant='h3' color='secondary' sx={{ xs: { display: "none", md: "block" } }}>Sort by</Typography>

          <Button variant="outlined" endIcon={<FilterListIcon />} sx={{ backgroundColor: "#F9F9F9", color: "#737373", border: "1px solid #DDDDDD", p: "11px 18px", textTransform: "none", display: { xs: "flex", md: "none" }, alignItems: "center", justifyContent: "space-between", width: "50%" }}
            onClick={toggleDrawer(true)}
          >
            Filter By
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ backgroundColor: "#F9F9F9", color: "#737373", border: "1px solid #DDDDDD", p: "11px 18px", textTransform: "none", marginLeft: "auto", width: "50%", justifyContent: "space-between" }}
          >
            Sort By
          </Button>
          <Menu
            id="demo-customized-menu"
            anchorEl={anchorEl} // Attach to button
            open={open}
            onClose={handleClose} // Close when clicking outside
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            disableScrollLock
            PaperProps={{
              sx: {
                width: anchorEl ? anchorEl.clientWidth * 0.5 : "auto",
                minWidth: "100px",
              },
            }}
          >
            <MenuItem onClick={handleClose} disableRipple sx={{ width: "100%" }}>
              Date
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple sx={{ width: "100%" }}>
              Price
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width: "80%", maxWidth: "300px", p: "20px" }
        }}
      >
        <Filters /> {/* Display the Filters component inside the drawer */}
      </Drawer>

      <Box sx={{ pt: "40px" }}>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          p: "0px 0px",
          justifyContent: "center",
          rowGap: "24px",
          columnGap: "30px",
        }}>
          {
            featuredData.map((item) => (
              <Box key={item.title} sx={{ width: "100%", margin: "0 auto" }}>
                <Box sx={{ p: "0px 0px ", width: "100%", height: "auto", overflow: "hidden" }}>
                  <img src={item.img} alt={item.title} style={{ objectFit: "cover", width: "100%", height: "100%", }} />
                </Box>
                <Stack sx={{ textAlign: "center", pt: "25px", pb: "35px" }} spacing={1.25}>
                  <Typography variant='h5' color="secondary" fontWeight={"700"} fontSize={"16px"}>
                    {item.title}
                  </Typography>
                  <Typography variant='h3' color="gray" fontWeight={"700"} fontSize={"14px"}>
                    {item.description}
                  </Typography>
                  <Stack spacing={0.75} sx={{ p: "5px 3px", textAlign: "center", alignItems: "center", justifyContent: "center" }} direction={"row"}>
                    <Typography variant='h5' color="#BDBDBD" fontWeight={"700"} fontSize={"16px"}>
                      {item.price}
                    </Typography>
                    <Typography variant='h5' color="darkGreen" fontWeight={"700"} fontSize={"16px"}>
                      {item.retailPrice}
                    </Typography>
                  </Stack>
                  <Stack spacing={0.75} sx={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} direction={"row"}>
                    <Box width={"16px"} height={"16px"} sx={{ backgroundColor: "#23A6F0", borderRadius: "50%" }}></Box>
                    <Box width={"16px"} height={"16px"} sx={{ backgroundColor: "#23856D", borderRadius: "50%" }}></Box>
                    <Box width={"16px"} height={"16px"} sx={{ backgroundColor: "#E77C40", borderRadius: "50%" }}></Box>
                    <Box width={"16px"} height={"16px"} sx={{ backgroundColor: "#252B42", borderRadius: "50%" }}></Box>
                  </Stack>
                </Stack>
              </Box>
            ))
          }
        </Box>
      </Box >
      <List sx={{ display: "flex", justifyContent: "center", py: "40px", borderRadius: "20px" }}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            // children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                  color: selected ? "#FFFFFF" : "#23A6F0",
                  backgroundColor: selected ? "#23A6F0" : "#FFFFFF",
                  border: "1px solid #E9E9E9",
                  padding: window.innerWidth < 500 ? "15px 10px" : "20px 15px",
                }}
          {...item}
              >
        {page}
      </button>
      );
          } else {

        children = (
          <button type="button"  {...item}
            style={{
              padding: window.innerWidth < 500 ? "15px 10px" : "20px 15px",
              border: "1px solid #E9E9E9",
            }}
          >
            {type}
          </button>
        );
          }

      return <li key={index}>{children}</li>;
        })}
    </List>
    </Box >
  )
}

export default FilteredProducts;
