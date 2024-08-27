import React from "react";

import {
  Avatar,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import { EmailOutlined, NotificationsOutlined } from "@mui/icons-material";

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
      <p>Logo</p>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <EmailOutlined />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <EmailOutlined />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <EmailOutlined />
        </IconButton>
      </Paper>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button variant="text">Text 1</Button>
        <Button variant="text">Text 2</Button>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <EmailOutlined />
        <NotificationsOutlined />
        <Avatar>H</Avatar>
      </Stack>
    </Stack>
  );
};

export default Navbar;
