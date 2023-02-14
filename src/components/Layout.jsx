import { Box } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import { DrawerHeader, SideBar } from "./SideBar";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar {...{ open, handleDrawerOpen, handleDrawerClose }} />
      <SideBar open={open} />
      <Box>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
