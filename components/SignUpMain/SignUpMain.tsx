/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import { SignInWrapper } from "@/styles/StyledComponents/SignInWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import LockIcon from "@/ui/Icons/LockIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface LinkProps {
  pathName: string;
}
export default function SignUpMain({ pathName }: LinkProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const onSubmit = () => {
    localStorage.setItem("userName", value);
    router.push("/");
  };
  return (
    <SignInWrapper>
      <Container fixed>
        <Box className="main_signUpwrapper">
          <Box className="mainWrap-titleSignUp">
            <Typography variant="h2">Welcome back</Typography>
            <Typography variant="body1">
              Enter your details to sign in
            </Typography>
          </Box>
          <Box className="wrraper-formSignUp">
            <Box className="single-inputWrap full-widthInputFld">
              <InputFieldCommon
                placeholder="John"
                type="text"
                label="First Name"
                startAdormentIcon
                adorMentIcon={<MailIcon IconColor={primaryColors?.colorGrey} />}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <InputFieldCommon
                placeholder="Doe"
                type="text"
                label="Last Name"
                onChange={(e) => setValue(e.target.value)}
                startAdormentIcon
                adorMentIcon={<MailIcon IconColor={primaryColors?.colorGrey} />}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <InputFieldCommon
                placeholder="Enter your Role"
                type="text"
                label="Role"
                onChange={(e) => setValue(e.target.value)}
                startAdormentIcon
                adorMentIcon={<MailIcon IconColor={primaryColors?.colorGrey} />}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <InputFieldCommon
                placeholder="info@email.com"
                type="email"
                label="Email address"
                onChange={(e) => setValue(e.target.value)}
                startAdormentIcon
                adorMentIcon={<MailIcon IconColor={primaryColors?.colorGrey} />}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <InputFieldCommon
                isPassword
                type="password"
                label="Password"
                placeholder="Password"
                startAdormentIcon
                adorMentIcon={<LockIcon />}
              />
            </Box>
          </Box>
          <Box className="checkboxWrap_main">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </Box>
          <Box className="wrap-singUp-btn">
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              onClick={() => onSubmit()}
            >
              <Typography variant="caption">Sign Up</Typography>
            </CustomButtonPrimary>
          </Box>
          <Box className="wrapperSignintxt">
            <Typography variant="body1">
              Already Have An Account? <Link href={pathName}>Sign In</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </SignInWrapper>
  );
}
