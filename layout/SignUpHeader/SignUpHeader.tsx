/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { Link } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
const SignUpHeaderWrap = styled(Box)`
  .main-headSignup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    padding: 39px 0 34px;
    text-align: center;
    background: transparent;
    @media (max-width: 1199px) {
      padding: 20px 0;
    }
    @media (max-width: 599px) {
      text-align: left;
      padding: 28px 16px;
    }
    &:after {
      content: "";
      width: calc(100% - 80px);
      right: 0;
      bottom: 0;
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      height: 1px;
      z-index: 9;
      @media (max-width: 599px) {
        background: linear-gradient(
          90deg,
          rgba(0, 209, 245, 0.3) 0%,
          rgba(252, 95, 255, 0.3) 100%
        );
        width: 100%;
      }
    }
    a {
      display: inline-block;
      width: 157px;
      @media (max-width: 599px) {
        width: 70px;
        display: inline-flex;
      }
    }
  }
`;

export default function SignUpHeader() {
  return (
    <SignUpHeaderWrap>
      <Box className="main-headSignup">
        <Link href="/">
          <Image src={assest.logo_img} alt="" height={29} width={157} />
        </Link>
      </Box>
    </SignUpHeaderWrap>
  );
}
