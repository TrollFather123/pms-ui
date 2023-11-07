import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CommmonHeaderWrapper = styled(Stack)`
  margin-bottom: 30px;
`;
interface haederProps {
  title: string;
  children?: React.ReactNode;
}

export const CommonHeader = ({ title, children }: haederProps) => {
  return (
    <CommmonHeaderWrapper
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h2">{title}</Typography>
      <Box className="rgt_stack">{children}</Box>
    </CommmonHeaderWrapper>
  );
};
