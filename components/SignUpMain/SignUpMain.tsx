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
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { app } from "../../firebase/firebase";

type RegisterDataType = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
};

interface LinkProps {
  pathName: string;
}

const auth = getAuth(app);

export default function SignUpMain({ pathName }: LinkProps) {
  const schema = yup.object().shape({
    firstName: yup.string().trim().required("First name is required"),
    lastName: yup.string().trim().required("Last name is required"),
    email: yup
      .string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    role: yup.string().trim().required("Role is required"),
    password: yup.string().trim().required("Password is required")
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: ""
    }
  });

  const getCurrentUser = async () => {
    try {
      const user = getAuth().currentUser?.email;
      const user_doc = await getDoc(
        doc(getFirestore(), "users", user as string)
      );
      console.log(user_doc.data(), user_doc.id);
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = (data: RegisterDataType) => {
    console.log(data, "data");
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        console.log(user, "user");
        try {
          await setDoc(doc(getFirestore(), "users", data?.email), {
            firstName: data?.firstName,
            lastName: data?.lastName,
            role: data?.role
          });
          getCurrentUser();
        } catch (err) {
          throw err;
        }
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      });
  };

  return (
    <SignInWrapper>
      <Container fixed>
        <Box className="main_signUpwrapper">
          <Box className="mainWrap-titleSignUp">
            <Typography variant="h2">Welcome back</Typography>
            <Typography variant="body1">
              Enter your details to sign up
            </Typography>
          </Box>
          <Box className="wrraper-formSignUp">
            <Box className="single-inputWrap full-widthInputFld">
              <Controller
                control={control}
                name="firstName"
                render={({ field: { onChange, value } }) => (
                  <InputFieldCommon
                    placeholder="John"
                    type="text"
                    label="First Name"
                    startAdormentIcon
                    adorMentIcon={
                      <MailIcon IconColor={primaryColors?.colorGrey} />
                    }
                    onChange={onChange}
                    value={value}
                    helperText={errors.firstName?.message}
                    error={Boolean(errors?.firstName)}
                  />
                )}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value } }) => (
                  <InputFieldCommon
                    placeholder="Doe"
                    type="text"
                    label="Last Name"
                    startAdormentIcon
                    adorMentIcon={
                      <MailIcon IconColor={primaryColors?.colorGrey} />
                    }
                    onChange={onChange}
                    value={value}
                    helperText={errors.lastName?.message}
                    error={Boolean(errors?.lastName)}
                  />
                )}
              />
            </Box>
            <Box className="single-inputWrap full-widthInputFld">
              <Controller
                control={control}
                name="role"
                render={({ field: { onChange, value } }) => (
                  <InputFieldCommon
                    placeholder="Enter your Role"
                    type="text"
                    label="Role"
                    startAdormentIcon
                    adorMentIcon={
                      <MailIcon IconColor={primaryColors?.colorGrey} />
                    }
                    onChange={onChange}
                    value={value}
                    helperText={errors.role?.message}
                    error={Boolean(errors?.role)}
                  />
                )}
              />
            </Box>
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
          </Box>
          <Box className="wrap-singUp-btn">
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
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
