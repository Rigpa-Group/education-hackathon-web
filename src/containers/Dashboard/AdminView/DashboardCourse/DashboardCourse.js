import React from 'react';
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import TablePagination from '@material-ui/core/TablePagination';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {useTheme} from '@material-ui/core';

export const DashboardCourse = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Card style={{padding: 20, borderRadius: 15}} className="box-shadow">
        <Grid container className="mb-3">
          <Grid item lg={1} xs={1} align="right">
            <ImportContactsIcon style={{color: theme.primary, fontSize: 42, marginRight: 10}}/>
          </Grid>
          <Grid item lg={6} xs={6}>
            <Typography style={{color: theme.primary, fontSize: 24, marginTop: 5, fontWeight: 900}}>
              Courses
            </Typography>
          </Grid>
          <Grid item lg={4} xs={4} align="right">
            <Typography style={{color: theme.primary, fontSize: 16, marginTop: 7}}>
              View All
            </Typography>
          </Grid>
        </Grid>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Sl.no</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Course Title</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Posted Date</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{color: '#727070', fontSize: 14}}>1</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Thimphu Tshechu</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#727070', fontSize: 14}}>2</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Thimphu Tshechu</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#727070', fontSize: 14}}>3</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Thimphu Tshechu</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#727070', fontSize: 14}}>4</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Thimphu Tshechu</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#727070', fontSize: 14}}>5</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Thimphu Tshechu</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TablePagination
            style={{float: 'right'}}
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Card>
    </div>
  );
};