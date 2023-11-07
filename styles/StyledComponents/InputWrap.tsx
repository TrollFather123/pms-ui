import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const InputWrap = styled(TextField as any)`
  .MuiInputAdornment-root {
    color: ${primaryColors?.colorGrey};
  }
  .MuiInputBase-adornedEnd {
    height: auto;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${primaryColors?.black};
    border-radius: 5px;
    padding: 11px 16px;
    min-height: 60px;
    border: 0;
    background: ${primaryColors?.white};
    /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06); */
    min-width: 300px;
    @media (max-width: 600px) {
      padding: 5px 10px;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.black};
      border: 0;
      padding: 0 0;
      font-size: 16px;
      font-weight: 400;
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &:-ms-input-placeholder {
        /* IE 10+ */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &:-moz-placeholder {
        /* Firefox 18- */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      height: 125px !important;
      padding: 20px 10px 20px 51px;
      @media (max-width: 600px) {
        padding: 20px 10px 20px 30px;
      }
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.black};
        &::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: ${primaryColors?.colorGrey} !important;
          opacity: 1 !important;
        }

        &::-moz-placeholder {
          /* Firefox 19+ */
          color: ${primaryColors?.colorGrey} !important;
          opacity: 1 !important;
        }

        &:-ms-input-placeholder {
          /* IE 10+ */
          color: ${primaryColors?.colorGrey} !important;
          opacity: 1 !important;
        }

        &:-moz-placeholder {
          /* Firefox 18- */
          color: ${primaryColors?.colorGrey} !important;
          opacity: 1 !important;
        }
      }
    }
    /* .MuiOutlinedInput-notchedOutline {
      display: none;
    
    } */
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &:-ms-input-placeholder {
        /* IE 10+ */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }

      &:-moz-placeholder {
        /* Firefox 18- */
        color: ${primaryColors?.colorGrey} !important;
        opacity: 1 !important;
      }
    }
  }
  .MuiInputBase-root {
    input {
      color: ${primaryColors?.black};
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${primaryColors?.colorGrey};
        opacity: 1;
      }

      ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${primaryColors?.colorGrey};
        opacity: 1;
      }

      :-ms-input-placeholder {
        /* IE 10+ */
        color: ${primaryColors?.colorGrey};
        opacity: 1;
      }

      :-moz-placeholder {
        /* Firefox 18- */
        color: ${primaryColors?.colorGrey};
        opacity: 1;
      }
    }
  }
  .MuiFormLabel-root {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 13px;
    font-weight: 400;
    left: 3px;
    top: 4px;
    /* &.MuiInputLabel-shrink {
      transform: translate(14px, 2px) scale(1);
      color: ${primaryColors?.textPrimaryColor};
    } */
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
