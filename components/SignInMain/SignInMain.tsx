/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import { SignInWrapper } from "@/styles/StyledComponents/SignInWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import LockIcon from "@/ui/Icons/LockIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type LogindataType = {
  email: string;
  password: string;
};

interface LinkProps {
  pathName: string;
}
export default function SignInMain({ pathName }: LinkProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    password: yup.string().trim().required("Password is required")
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: LogindataType) => {
    console.log(data, "data");
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
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <InputFieldCommon
                    placeholder="info@email.com"
                    type="email"
                    label="Email address"
                    startAdormentIcon
                    adorMentIcon={
                      <MailIcon IconColor={primaryColors?.colorGrey} />
                    }
                    onChange={onChange}
                    value={value}
                    helperText={errors.email?.message}
                    error={Boolean(errors?.email)}
                  />
                )}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <InputFieldCommon
                    isPassword
                    type="password"
                    label="Password"
                    placeholder="Password"
                    startAdormentIcon
                    adorMentIcon={<LockIcon />}
                    onChange={onChange}
                    value={value}
                    helperText={errors.password?.message}
                    error={Boolean(errors?.password)}
                  />
                )}
              />
            </Box>
          </Box>
          <Box className="checkboxWrap_main">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Typography variant="body1">
              <Link href="javascript:void(0)">Forgot password?</Link>
            </Typography>
          </Box>
          <Box className="wrap-singUp-btn">
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              <Typography variant="caption">Sign in</Typography>
            </CustomButtonPrimary>
          </Box>
          <Box className="wrapperSignintxt">
            <Typography variant="body1">
              Don’t Have An Account? <Link href={pathName}>Sign up</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </SignInWrapper>
  );
}
