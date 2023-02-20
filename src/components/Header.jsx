import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Hamburger from "./Hamburger";
import SearchIcon from "@mui/icons-material/Search";
import {
  styled,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ToolBox = styled(Toolbar)({
    justifyContent: "space-between",
  });
  const Logotext = styled(Typography)`
    font-size: 19px;
    margin-left: 1px;
    color: #000000;
    font-weight: bold;
  `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: "#ffffff" }}>
        <ToolBox>
          {/* Hamburger icon */}
          <Hamburger />

          {/* Logo */}
          <CardActionArea
            href={"/"}
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            <img height={40} src='/logo192.png' />
            <Logotext>Daily Dose</Logotext>
          </CardActionArea>
          {/* Search */}
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='#000000'
          >
            <SearchIcon />
          </IconButton>
        </ToolBox>
      </AppBar>
    </Box>
  );
}
