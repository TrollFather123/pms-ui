/* eslint-disable react-hooks/rules-of-hooks */
import { CommonHeader } from "@/components/CommonHeader/CommonHeader";

import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CustomTable from "@/ui/CustomTable/CustomTable";
import Typography from "@mui/material/Typography";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/auth/signin");
      }
    });
  }, []);
  return (
    <Wrapper>
      <CommonHeader title="List Of Total Project">
        <CustomButtonPrimary variant="contained" color="primary">
          <Typography variant="caption">Add Project</Typography>
        </CustomButtonPrimary>
      </CommonHeader>
      <CustomTable />
    </Wrapper>
  );
}
