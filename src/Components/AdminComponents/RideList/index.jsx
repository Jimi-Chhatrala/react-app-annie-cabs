import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: "#f0f0f0",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(firstname, lastname, phoneno, profile) {
  return { firstname, lastname, phoneno, profile };
}

// const rows = [
//   createData("Cupcake", 305, 3.7),
//   createData("Donut", 452, 25.0),
//   createData("Eclair", 262, 16.0),
//   createData("Frozen yoghurt", 159, 6.0),
//   createData("Gingerbread", 356, 16.0),
//   createData("Honeycomb", 408, 3.2),
//   createData("Ice cream sandwich", 237, 9.0),
//   createData("Jelly Bean", 375, 0.0),
//   createData("KitKat", 518, 26.0),
//   createData("Lollipop", 392, 0.2),
//   createData("Marshmallow", 318, 0),
//   createData("Nougat", 360, 19.0),
//   createData("Oreo", 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const rows = [
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
  createData("Ahmedabad", "Vadodara", "2024-06-12", "18:00"),
];

export default function RideList() {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Create a styled component
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
  }));

  return (
    <div className="bg-white m-4 space-y-2">
      <div className="p-4">
        <p className="text-2xl">Ride List</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-4 gap-5">
        <input
          type="text"
          placeholder="Search With Ride Id"
          className="px-4 py-2 border"
        />
        <input
          type="text"
          placeholder="Search Phone Number"
          className="px-4 py-2 border"
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell>Pick-up Location</StyledTableCell>
              <StyledTableCell>Drop Location</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
              {/* <StyledTableCell>Action</StyledTableCell> */}
              {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
              {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell> */}
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
              {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.lastname}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.phoneno}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={require("../../../images/user.jpg")}
                    alt=""
                    className="w-8 h-8"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <button className="px-4 py-2 bg-purple-500 rounded font-bold text-white">
                    Vehicle
                  </button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <button className="px-4 py-2 bg-red-500 rounded font-bold text-white">
                    Vendor
                  </button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <button
                    className="px-4 py-2 bg-green-500 rounded font-bold text-white"
                    onClick={() => navigate("/admin_layout/vendor_details")}
                  >
                    Details
                  </button>
                </TableCell>
                {/* <TableCell component="th" scope="row">
                  <button
                    className="px-4 py-2 bg-purple-500 rounded"
                    onClick={() => navigate("/admin_layout/admin_vehicle")}
                  >
                    Vehicle
                  </button>
                </TableCell> */}
                {/* <TableCell style={{ width: 160 }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.fat}
                </TableCell> */}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={9}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}