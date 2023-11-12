import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useFetch from "../../hooks/useFetch";

const columns = [
    {
      id: "nomorKendaraan",
      label: "Nomor Kendaraan",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "tanggal",
      label: "Waktu Pelanggaran",
      minWidth: 100,
      align: "center",
    },
    {
      id: "lokasi",
      label: "Lokasi Pelanggaran",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "keterangan",
      label: "Keterangan",
      minWidth: 170,
      align: "center",
    },
];

export default function StickyHeadTable() {
    const { data, loading, error } = useFetch("http://localhost:8800/api/tilang");
    console.log("data", data);
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const onClickRent = (data) => {
      <img 
      src="https://lh3.googleusercontent.com/-IdzPrqyeiaQ/YUFg9oObsAI/AAAAAAAAONk/M-l8ZdRoYJYXHzur3u1RC_B0Eas-iq7vgCLcBGAsYHQ/s1600/1631674611384307-0.png"
      alt="imagee"
      />
    };

    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}

              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format &&
                            (typeof value === "number" ||
                              typeof value === "boolean")
                              ? column.format(value)
                              : value}
                          </TableCell>
                         );  
                        })}

                          <TableCell>
                        <button
                          onClick={() => onClickRent(row)}
                          className=" outline outline-2 outline-red-800 w-[100px] h-[30px] bg-red-800 text-white rounded-[10px]"
                        >
                          <p className="inline"> Cek Bukti</p>
                        </button>
                        </TableCell>

                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
  