import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";

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
          a {
            &:hover {
              color: ${primaryColors?.primary1};
            }
          }
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
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023"),
  createData("Google UI", "Maria Jonathan", 6, "20th June 2023")
];

export default function CustomTable() {
  return (
    <CustomTableWrapper>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Total Hours</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.clientName}</TableCell>
              <TableCell align="center">{row.totalHours} Hours</TableCell>
              <TableCell align="center">{row.startDate}</TableCell>
              <TableCell align="center">
                <Link href="/">View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableWrapper>
  );
}
