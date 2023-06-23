import * as React from "react";
import "./MenuAccount.scss";
import "./../Iconfont/Iconsfont.scss";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as CustomIcon } from "../../imgs/Google_icon.svg";

const MenuAccount = () => {
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem
              component={Link}
              to="Debts"
              onClick={handleClose}
              className="Google-btn"
              style={{
                background: "#e0e4ebd2",
                transition: "background-color 0.3s",
                color: "blue",
                paddingLeft: "5px",
                paddinRight: "5px",
              }}
            >
              <CustomIcon
                style={{ width: "24px", height: "24px", marginRight: "2px" }}
              />
              Sing in
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default MenuAccount;
