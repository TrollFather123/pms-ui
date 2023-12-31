import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WrapperStyle = styled(Box)`
  .main_body {
    min-height: calc(100vh - 96px);
  }
  strong,
  b {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${primaryColors?.primary};
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    color: ${primaryColors?.primary};
  }

  a:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    color: ${primaryColors?.mainFontColor};
  }
  h1 {
    text-transform: capitalize;
  }
  p:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 0;
    position: relative;
    list-style: none;
  }

  button {
    .MuiTouchRipple-root {
      display: none;
    }
  }

  a,
  button {
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
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
    padding: 5px 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 2px solid #656664;
    border-radius: 0;
  }

  select {
    background: url(/assets/images/down-arrow.svg) right 10px center no-repeat;
    background-size: 20px;
  }

  select[multiple] {
    background: transparent;
  }

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

  /* button, */
  input[type="button"],
  input[type="submit"] {
    text-align: center;
    padding: 8px 20px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    color: #fff;
    background: #51bff0;
    border: 1px solid #51bff0;
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
    cursor: pointer;
    display: inline-block;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover {
    background-color: #51bff0;
    color: #ffffff;
    outline: none;
    text-decoration: none;
  }

  .MuiButtonBase-root {
    text-transform: none !important;
  }

  .cmn_gap {
    padding: 50px 0;
  }

  .cmn_gap_top {
    padding-top: 0 !important;
  }

  .cmn_gap_btm {
    padding-bottom: 0 !important;
  }

  .cmn_head {
    margin-bottom: 50px;
    text-align: center;

    h2 {
      font-size: 40px;
      text-transform: none;
      color: #202020;
      @media (max-width: 1200px) {
      }
    }
  }

  // ====================================================

  // contact input

  ::-webkit-scrollbar {
    width: 6px;
    background: #f9f9f9;
    border-radius: 44px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    background: #329691;
    border-radius: 44px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #329691;
  }

  // &::-webkit-scrollbar:vertical {
  //   display: none;
  // }

  .slick-slider {
    width: 100%;
  }

  // validation message
  .MuiFormHelperText-root {
    font-size: 16px !important;
    color: var(--colorff0000) !important;
  }

  .errSpan {
    color: red;
  }

  // ========================================
  //   .global_slick {
  //     .slick-dots {
  //       text-align: start;
  //       bottom: -65px;
  //       li {
  //         width: 14px;
  //         height: 14px;
  //         button {
  //           border: 1px solid rgba(255, 255, 255, 0.5);
  //           width: 10px;
  //           height: 10px;
  //           line-height: 10px;
  //           background: transparent;
  //           border-radius: 100%;
  //           margin: auto;

  //           &::before {
  //             font-size: 0;
  //             line-height: 10px;

  //             width: auto;
  //             height: auto;
  //             content: "";
  //             text-align: center;
  //             border: 0;
  //             opacity: 1;
  //             background: transparent;
  //             border-radius: 100%;
  //           }
  //         }
  //         &.slick-active {
  //           button {
  //             opacity: 1;
  //             background: linear-gradient(
  //               158.45deg,
  //               #0bd3d3 17.08%,
  //               #ab2aa9 64.21%,
  //               #f890e7 97.73%
  //             );
  //             &::before {
  //               // opacity: 1;
  //               // background: linear-gradient(
  //               //   158.45deg,
  //               //   #0bd3d3 17.08%,
  //               //   #ab2aa9 64.21%,
  //               //   #f890e7 97.73%
  //               // );
  //               // outline: 1px solid rgba(11, 211, 211, 1);
  //               // outline-offset: 3px;
  //               width: auto;
  //               height: auto;
  //               border: 1px solid rgba(11, 211, 211, 1);
  //               border-radius: 100%;
  //               content: "";
  //               top: -4px;
  //               left: -3px;
  //               right: -3px;
  //               bottom: -2px;
  //             }
  //           }
  //         }
  //       }
  //     }

  //     .slick-prev {
  //       background-image: url("../public/assets/images/prev.svg");
  //       background-position: center;
  //       background-repeat: no-repeat;
  //       background-size: 30px;
  //       left: -40px;
  //       width: 30px;
  //       height: 30px;
  //       &::before {
  //         content: "";
  //       }
  //       &:hover {
  //         background: url("../public/assets/images/prev2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //       &:focus {
  //         background: url("../public/assets/images/prev2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //     }
  //     .slick-next {
  //       background-image: url("../public/assets/images/next.svg");
  //       background-position: center;
  //       background-repeat: no-repeat;
  //       background-size: 30px;
  //       right: -40px;
  //       width: 30px;
  //       height: 30px;
  //       &::before {
  //         content: "";
  //       }
  //       &:hover {
  //         background: url("../public/assets/images/next2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //       &:focus {
  //         background: url("../public/assets/images/next2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //     }
  //   }

  // ==============================
  .MuiContainer-root {
    @media (min-width: 1200px) {
      max-width: 1170px;
      padding: 0 10px;
    }
    &.cus_container {
      @media (min-width: 1400px) {
        max-width: 1470px;
      }
    }
  }
  //   ======================

  .left_part {
    width: 291px;
    flex-basis: 291px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid ${primaryColors?.borderColor};
    background: ${primaryColors?.white};
  }
  .rgt_part {
    width: calc(100% - 291px);
    flex-basis: calc(100% - 291px);
    margin-left: auto;
    padding-top: 86px;
  }
  .body_main {
    padding: 25px 30px;
    background-color: ${primaryColors?.white};
  }
`;
