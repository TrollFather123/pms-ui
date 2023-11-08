/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import { SignInWrapper } from "@/styles/StyledComponents/SignInWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import MailIcon from "@/ui/Icons/MailIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase/firebase";

import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type LogindataType = {
  email: string;
};

const auth = getAuth(app);

export default function ResetPassword() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Invalid email")
      .required("Email is required")
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

  const router = useRouter();

  const onSubmit = (data: LogindataType) => {
    console.log(data, "data");

    sendPasswordResetEmail(auth, data?.email)
      .then((data) => {
        alert("link send to your email");
        console.log(data, "success");
        router.push("/auth/signin");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <SignInWrapper>
      <Container fixed>
        <Box className="main_signUpwrapper">
          <Box className="mainWrap-titleSignUp">
            <Typography variant="h2">Reset Password</Typography>
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
          </Box>

          <Box className="wrap-singUp-btn">
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              <Typography variant="caption">Send</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Container>
    </SignInWrapper>
  );
}
