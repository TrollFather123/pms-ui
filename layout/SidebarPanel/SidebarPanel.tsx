/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import DashboardIcon from "@/ui/Icons/DashboardIcon";
import ProfileIcon from "@/ui/Icons/ProfileIcon";
import styled from "@emotion/styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarWrapper = styled(Box)`
  .logo_section {
    padding: 14px 28px 0 28px;
    > a {
      color: ${primaryColors?.secondaryFont};
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: inline-flex;
      align-items: center;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }
  }
  .nav_list {
    padding-top: 35px;
    li {
      a {
        display: flex;
        align-items: center;
        color: ${primaryColors?.secondaryFont};
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        text-transform: capitalize;
        padding: 16px 32px;
        width: 100%;
        i {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
        }
        &:hover,
        &.active {
          background-color: ${primaryColors?.primary};
          color: ${primaryColors?.white};
          i {
            svg {
              path {
                fill: currentColor;
              }
            }
          }
        }
      }
    }
  }
`;

export default function SidebarPanel() {
  const navItems = [
    {
      name: "Dashboard",
      routePath: "/",
      icon: <DashboardIcon />
    },
    {
      name: "My profile",
      routePath: "/profile",
      icon: <ProfileIcon />
    },
    {
      name: "Event Management",
      routePath: "/event-management",
      icon: <DashboardIcon />
    },
    {
      name: "Enquiries",
      routePath: "/enquiries",
      icon: <DashboardIcon />
    },
    {
      name: "Analytics",
      routePath: "/analytics",
      icon: <DashboardIcon />
    }
  ];

  const router = useRouter();
  return (
    <SidebarWrapper>
      <Box className="logo_section">
        <Link href="/">
          <i>
            <Image src={assest?.logo_img} alt="image" width={41} height={41} />
          </i>
          TEST
        </Link>
      </Box>
      <List disablePadding className="nav_list">
        {navItems?.map((item, index) => (
          <ListItem disablePadding key={index}>
            <Link
              href={item?.routePath}
              className={router.pathname === item?.routePath ? "active" : ""}
            >
              <i>{item?.icon}</i>
              {item?.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  );
}
