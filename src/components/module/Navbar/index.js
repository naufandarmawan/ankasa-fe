"use client";

import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import {
  EmailOutlined,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import AnkasaLogo from "../../../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      sx={{ minWidth: "auto" }}
      className="px-40 py-10"
    >
      <Image src={AnkasaLogo} alt="Ankasa Logo" />

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, backgroundColor: "#F5F5F5", borderRadius: "10px", color: "#6B6B6B", boxShadow: "none" }}
      >
        <IconButton type="button" sx={{ p: "10px", color: "#A3A3A3" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Where you want to go?"
          inputProps={{ "aria-label": "where you want to go?" }}
        />
      </Paper>

      <Stack direction="row" spacing={"48px"}>
        <Button variant="text">Find Ticket</Button>
        <Button variant="text">My Booking</Button>
      </Stack>

      <Stack direction="row" spacing={"48px"} alignItems="center">
        <Badge badgeContent={4} color="primary">
          <EmailOutlined color="action" />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <NotificationsOutlined color="action" />
        </Badge>
        <Avatar>H</Avatar>
      </Stack>
    </Stack>
  );
};

export default Navbar;
