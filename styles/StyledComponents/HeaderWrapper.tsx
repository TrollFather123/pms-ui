import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.primary1};
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
  width: calc(100% - 291px);
  margin-left: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  /* transition: all 0.5s ease; */
  &.overflow_active {
    width: calc(100% - 306px);
    margin-right: 15px;
    margin-left: auto;
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_left {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: ${primaryColors?.white};
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      text-transform: capitalize;
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    button {
      padding: 0;
      min-width: auto;
      &:hover {
        background-color: transparent;
      }
    }
    .menu_list {
      display: flex;
      align-items: center;
      li {
        width: auto;
        padding: 0 15px;
        &:last-child {
          padding-right: 0;
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
  .avatar_image {
    width: 42px;
    height: 42px;
    margin-right: 8px;
  }
  .user_select_btn {
    color: ${primaryColors?.white};
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    > span {
      color: inherit;
      display: inline-block;
      margin: 0 20px 0 0;
    }
    > i {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .headerContainer {
    background-color: transparent !important;
    padding: 20px 40px;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 120px;
    display: inline-block;
    transition: all 0.4s;
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
`;
