import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SignInWrapper = styled(Box)`
  .main_signUpwrapper {
    position: relative;
    padding: 30px 20px;
    border-radius: 29px;
    border: 1px solid ${primaryColors?.borderColor};
    background: ${primaryColors?.white};
    width: 609px;
    margin: 0 auto;
    @media (max-width: 1199px) {
      padding: 40px 30px;
    }
    @media (max-width: 599px) {
      padding: 0;
      background: transparent;
    }
    .mainWrap-titleSignUp {
      position: relative;
      text-align: center;
      margin-bottom: 50px;
      h2 {
        font-size: 25px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      p {
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
        font-weight: 400;
      }
    }
    .iconInput-field {
      position: absolute;
      top: 20px;
      z-index: 1;
      left: 17px;
      @media (max-width: 899px) {
        left: 15px;
      }
      @media (max-width: 600px) {
        left: 10px;
      }
    }
    .wrraper-formSignUp {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -7px;
      .single-inputWrap {
        padding: 0 7px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        &.half-widthInputFld {
          width: 50%;
        }
        &.full-widthInputFld {
          width: 100%;
        }
        .select-wrap-signup {
          position: relative;
          width: 100%;
          .MuiInputBase-root {
            width: 100%;

            .MuiSelect-select {
              border: 1px solid var(--color070707);
              height: 50px;
              box-sizing: border-box;
              font-size: 16px;
              font-weight: 400;
              color: var(--white);
              background: var(--color070707);
              border-radius: 10px;
              -webkit-border-radius: 10px;
              padding: 5px 10px 5px 42px;
              display: flex;
              align-items: center;
              &:focus {
                border: 1px solid var(--color00D1F5);
                background: var(--color141414);
              }
              span {
                font-style: normal;
                color: var(--colorA8A8A8);
                opacity: 1;
              }
              @media (max-width: 600px) {
                padding: 5px 10px 5px 40px;
              }
            }
            .MuiSvgIcon-root {
              background: url("/assets/images/selectArwsdropOn.svg");
              background-size: 12px;
              width: 12px;
              height: 7px;
              top: 22px;
              right: 16px;
              path {
                display: none;
              }
            }
            .MuiOutlinedInput-notchedOutline {
              display: none;
            }
          }
        }
      }
    }
    .checkboxWrap_main {
      position: relative;
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
        a {
          color: ${primaryColors?.primary};
          &:hover {
            color: ${primaryColors?.textPrimaryColor};
          }
        }
      }
    }
    .wrap-singUp-btn {
      position: relative;
      margin: 30px 0;
      button {
        width: 100%;
      }
    }
    .wrapperSignintxt {
      position: relative;
      text-align: center;
      p {
        font-size: 14px;
        font-weight: 500;
        a {
          color: ${primaryColors?.primary};
          &:hover {
            color: ${primaryColors?.textPrimaryColor};
          }
        }
      }
    }
  }
`;
