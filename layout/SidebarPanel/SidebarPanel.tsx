/* eslint-disable react/no-array-index-key */
import DashboardIcon from "@/ui/Icons/DashboardIcon";
import styled from "@emotion/styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";

const SidebarWrapper = styled(Box)``;

export default function SidebarPanel() {
  const navItems = [
    {
      name: "Dashboard",
      routePath: "/",
      icon: <DashboardIcon />
    },
    {
      name: "My profile",
      routePath: "/",
      icon: <DashboardIcon />
    },
    {
      name: "Event Management",
      routePath: "/",
      icon: <DashboardIcon />
    },
    {
      name: "Enquiries",
      routePath: "/",
      icon: <DashboardIcon />
    },
    {
      name: "Analytics",
      routePath: "/",
      icon: <DashboardIcon />
    }
  ];
  return (
    <SidebarWrapper>
      <List disablePadding>
        {navItems?.map((item, index) => (
          <ListItem disablePadding key={index}>
            <Link href={item?.routePath}>
              <i>{item?.icon}</i>
              <Typography variant="caption">{item?.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  );
}
