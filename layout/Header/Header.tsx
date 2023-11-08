/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import assest from "@/json/assest";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import BellIcon from "@/ui/Icons/BellIcon";
import DashboardIcon from "@/ui/Icons/DashboardIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import SearchIcon from "@/ui/Icons/SearchIcon";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { app } from "../../firebase/firebase";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  window?: () => Window;
}
const auth = getAuth(app);
export default function Header(props: Props) {
  console.log(props);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.add("overflow_active");
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.remove("overflow_active");
    }
  };

  const [anchorElNotification, setAnchorElNotification] =
    useState<null | HTMLElement>(null);
  const openForNotification = Boolean(anchorElNotification);
  const handleClickForNotification = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElNotification(event.currentTarget);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.add("overflow_active");
    }
  };
  const handleCloseForNotification = () => {
    setAnchorElNotification(null);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.remove("overflow_active");
    }
  };

  const [userSelect, setUserSelect] = useState<null | HTMLElement>(null);
  const openUser = Boolean(userSelect);
  const handleClickUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserSelect(event.currentTarget);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.add("overflow_active");
    }
  };
  const handleCloseUser = () => {
    setUserSelect(null);
    if (typeof window !== "undefined") {
      document.querySelector(".main_head")?.classList.remove("overflow_active");
    }
  };

  const [user, setUser] = useState("");

  const getCurrentUser = async () => {
    try {
      const user_email = getAuth().currentUser?.email;
      const user_doc = await getDoc(
        doc(getFirestore(), "users", user_email as string)
      );
      console.log(user_doc.data(), "user_doc");
      setUser(user_doc?.data()?.firstName);
    } catch (err) {
      throw err;
    }
  };

  const SignOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box className="hdr_left">
            <i>
              <DashboardIcon IconColor={primaryColors?.white} />
            </i>
            <Typography>Dashboard</Typography>
          </Box>

          <Box className="hdr_rgt">
            <List disablePadding className="menu_list">
              <ListItem disablePadding>
                <IconButton disableRipple>
                  <SearchIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  disableRipple
                >
                  <MailIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </ListItem>

              <ListItem>
                <IconButton
                  id="basic-button"
                  aria-controls={
                    openForNotification ? "notification" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openForNotification ? "true" : undefined}
                  onClick={handleClickForNotification}
                  disableRipple
                >
                  <BellIcon />
                </IconButton>
                <Menu
                  id="notification"
                  anchorEl={anchorElNotification}
                  open={openForNotification}
                  onClose={handleCloseForNotification}
                >
                  <MenuItem onClick={handleCloseForNotification}>
                    Profile
                  </MenuItem>
                </Menu>
              </ListItem>

              <ListItem>
                <Button
                  id="basic-button"
                  aria-controls={openUser ? "notification" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openUser ? "true" : undefined}
                  onClick={handleClickUser}
                  className="user_select_btn"
                  disableRipple
                >
                  <Avatar
                    alt="avatar image"
                    src={assest?.avatar_img}
                    className="avatar_image"
                  />
                  <Typography variant="caption">Hello {user}!</Typography>
                  <i>
                    <Image
                      src={assest?.dropdown_icon}
                      alt="icon"
                      width={12}
                      height={12}
                    />
                  </i>
                </Button>
                <Menu
                  id="notification"
                  anchorEl={userSelect}
                  open={openUser}
                  onClose={handleCloseUser}
                >
                  <MenuItem onClick={handleCloseUser}>Profile</MenuItem>
                  <MenuItem onClick={SignOutUser}>Logout</MenuItem>
                </Menu>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </HeaderWrap>
  );
}
