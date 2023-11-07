/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import SearchIcon from "@/ui/Icons/SearchIcon";
import CartIcon from "@/ui/Icons/cartIcon";
import { Badge, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Link from "next/link";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  console.log(props);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <Box className="hdr_left">
              <Link href="/" className="headerLogo">
                PMS
              </Link>
              <Button className="search_btn">
                <SearchIcon />
              </Button>
            </Box>

            <Box className="hdr_rgt">
              <Box className="cart_icon">
                <Badge color="primary" variant="dot">
                  <CartIcon />
                </Badge>
              </Box>
              <CustomButtonPrimary
                type="button"
                variant="contained"
                color="primary"
              >
                <Typography>Login</Typography>
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </HeaderWrap>
  );
}
