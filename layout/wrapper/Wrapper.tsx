/* eslint-disable no-undef */
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import { primaryColors } from "@/themes/_muiPalette";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import Header from "../Header/Header";
import SidebarPanel from "../SidebarPanel/SidebarPanel";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   if (document) {
  //     const hdrElm = document.querySelector<HTMLElement>(".main_head");
  //     const hdrHeight = hdrElm?.clientHeight;
  //     const paaddngELM = document.querySelector<HTMLElement>(".body_content");
  //     if (!!paaddngELM) {
  //       paaddngELM.style.paddingTop = hdrHeight + "px";
  //     }
  //   }
  // });
  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "PMS";

  useOnlineStatus();

  return (
    <WrapperStyle>
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />
      <Header />

      <Stack direction="row" flexWrap="wrap" className="body_content">
        <Box className="left_part">
          <SidebarPanel />
        </Box>
        <Box className="rgt_part">
          <Box className="body_main">{children}</Box>
        </Box>
      </Stack>

      <Backdrop
        sx={{
          color: `${primaryColors?.white}`,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </WrapperStyle>
  );
};

export default Wrapper;
