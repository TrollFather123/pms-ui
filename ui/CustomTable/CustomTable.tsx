import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CustomTableWrapper = styled(TableContainer)`
  border-radius: 10px;
  border: 1px solid ${primaryColors?.borderColor};
  background: ${primaryColors?.white};
  /* overflow: hidden; */
  table {
    thead {
      tr {
        th {
          color: ${primaryColors?.mainFontColor};
          font-size: 18px;
          font-weight: 600;
          line-height: normal;
          padding: 25px 30px;
        }
      }
    }
    tbody {
      tr {
        td {
          color: ${primaryColors?.cellColor};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          padding: 25px 30px;
        }
      }
    }
  }
`;

function createData(
  name: string,
  clientName: string,
  totalHours: number,
  startDate: string
) {
  return { name, clientName, totalHours, startDate };
}

const rows = [
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023"),
  createData("Maria Jonathan", "Maria Jonathan", 6, "20th June 2023")
];

export default function CustomTable() {
  return (
    <CustomTableWrapper>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Client Name</TableCell>
            <TableCell align="left">Total Hours</TableCell>
            <TableCell align="left">Start Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.clientName}</TableCell>
              <TableCell align="left">{row.totalHours} Hours</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableWrapper>
  );
}
