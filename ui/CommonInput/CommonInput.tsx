/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import { StandardTextFieldProps } from "@mui/material/TextField";

import React, { forwardRef } from "react";

import { InputWrap } from "@/styles/StyledComponents/InputWrap";
import EyeClose from "../Icons/EyeClose";
import EyeOpen from "../Icons/EyeOpen";

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  startAdormentIcon?: boolean;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  (
    { isPassword = false, adorMentIcon, startAdormentIcon = false, ...others },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputWrap
        fullWidth
        variant="outlined"
        {...others}
        type={isPassword ? (showPassword ? "text" : "password") : others?.type}
        InputProps={{
          inputRef: ref,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {showPassword ? <EyeClose /> : <EyeOpen />}
              </IconButton>
            </InputAdornment>
          ) : startAdormentIcon ? null : (
            <InputAdornment position="end">
              <IconButton disableRipple>{adorMentIcon}</IconButton>
            </InputAdornment>
          ),
          startAdornment: startAdormentIcon && (
            <InputAdornment position="end">
              <IconButton disableRipple>{adorMentIcon}</IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
);

export default InputFieldCommon;
