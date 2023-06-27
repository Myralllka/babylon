import * as React from "react";
import "./MenuAccount.scss";
import "./../Iconfont/Iconsfont.scss";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Authoriz from "../Authoriz/Authoriz";

const MenuAccount = ({ handleCallbackResponse, handleLogOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="account_button">
        <div>
          <div
            className="_icon-Account"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              className="MenuItem_header"
              sx={{
                padding: "0",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16",
                margin: "0",
                justifyContent: "center",
              }}
              component={Link}
              to="Profile"
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <Authoriz
              onClick={handleCallbackResponse}
              id="signInDiv"
            ></Authoriz>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default MenuAccount;
