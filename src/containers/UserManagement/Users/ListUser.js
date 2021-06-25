import React, {useEffect, useState} from 'react';
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useSnackbar} from 'notistack';
import {fetchUsers} from '../UserServicesList';
import TablePagination from '@material-ui/core/TablePagination';
import {Notify, setProps} from '../../../shared/components/notification/Notification';

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

export const ListUser = ({role}) => {
  const history = useHistory();
  const classes = useStyles();
  const snackbar = useSnackbar();
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setProps(snackbar);
    fetchAdminUsers();
  }, [page, rowsPerPage]);

  const fetchAdminUsers = () => {
    fetchUsers({
      roles: [role],
      page: page,
      per_page: rowsPerPage,
    }).then(response => {
      setTotal(response.meta.total);
      setUsers(response.users);
    }).catch(err => Notify(err, 'error'));
  };

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
            {users.length > 0  && users?.map((user, index) => (
            <TableRow hover={true} key={index} className="hand-cursor" onClick={() => viewProfile(user?.id)}>
              <TableCell className={classes.tableBody}>{index+1}</TableCell>
              <TableCell className={classes.tableBody} style={{textTransform: 'capitalize'}}>
                {user?.profile_attributes?.first_name} {' '} {user?.profile_attributes?.last_name}</TableCell>
              <TableCell className={classes.tableBody}>
                <a href="mailto: kinga@gmail.com">{user?.email}</a>
              </TableCell>
              <TableCell className={classes.tableBody}>
                <a href={`tel:${user?.attributes?.phone}`}>{user?.phone}</a>
              </TableCell>
            </TableRow>
            ))}
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
};
