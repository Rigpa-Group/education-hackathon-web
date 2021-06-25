import React, {useEffect, useState} from 'react';
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useSnackbar} from 'notistack';
import {fetchUsers} from '../UserServicesList';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles(theme => ({
  tableHead: {
    fontSize: 18,
    fontWeight: 500
  },
  tableBody: {
    fontSize: 14,
    fontWeight: 400
  }
}));

export const ListUser = ({querySearch, date, role, status}) => {
  const history = useHistory();
  const classes = useStyles();
  const snackbar = useSnackbar();
  const [users, setUsers] = useState([]);
  const [includeList, setIncludeList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const checkQuery = (search) => {
    return search !== '' || search !== undefined;
  };

  /*const fetchAdminUsers = () => {
    fetchUsers({
      q: querySearch,
      status: status,
      roles: [role],
      page: checkQuery(querySearch) ? 1 : page,
      per_page: rowsPerPage,
      from_date: date?.from_date,
      to_date: date?.to_date
    }).then(response => {
      setTotal(response.meta.total);
      setIncludeList(response.included);
      setUsers(response.data);
    }).catch(err => Notify(err, 'error'));
  };*/

  const handlePageChange = (event, page) => {
    setPage(page + 1);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const viewProfile = (id) => {
    history.push(`/profile/${id}?detail=${true}`);
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper} style={{borderRadius: 0}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Sl.No</TableCell>
              <TableCell className={classes.tableHead}>Name</TableCell>
              <TableCell className={classes.tableHead}>Email Address</TableCell>
              <TableCell className={classes.tableHead}>Phone Number#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow hover={true} className="hand-cursor">
                <TableCell className={classes.tableBody}>1</TableCell>
                <TableCell className={classes.tableBody} style={{textTransform: 'capitalize'}}>karma</TableCell>
                <TableCell className={classes.tableBody}>
                  <a href='mailto: kinga@gmail.com'>kinga@gmail.com</a>
                </TableCell>
                <TableCell className={classes.tableBody}>
                  <a href={'tel: 17971633'}>17971633</a>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page - 1}
          count={total}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
        />
      </TableContainer>
    </React.Fragment>
  );
}
