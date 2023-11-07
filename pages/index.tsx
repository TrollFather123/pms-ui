import { CommonHeader } from "@/components/CommonHeader/CommonHeader";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CustomTable from "@/ui/CustomTable/CustomTable";
import Typography from "@mui/material/Typography";

export default function Home() {
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
