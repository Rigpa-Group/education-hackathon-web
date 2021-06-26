import React from 'react';
import ViewAll from '../../views/landing/view-all/ViewAll';
import {makeStyles, Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import RenderAuthorized from '../../routes/RenderAuthorized';
import TablePagination from '@material-ui/core/TablePagination';
import {useTheme} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    float: 'right',
    marginBottom: 30,
    marginRight: 25,
  }
}))

export const ListCourse = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const addCourse = () => {
    history.push('/course/add')
  }

  return (
    <React.Fragment>
      <RenderAuthorized authorized={['Tutor']}>
      <section>
        <Button variant="contained" className={classes.button} onClick={addCourse}>Add Course</Button>
      </section>
      </RenderAuthorized>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Sl.no</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Course Name</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Course Category</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Tutor</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Posted Date</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Status</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{color: '#727070', fontSize: 14}}>1</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Hacking Tutorials</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Information Technology</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Zala Kinga Norbu</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              <TableCell>
                <Tooltip title="Detail">
                  <ArrowForwardIcon style={{color: theme.primary}}/>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color: '#727070', fontSize: 14}}>1</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Hacking Tutorials</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Information Technology</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Zala Kinga Norbu</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              <TableCell>
                <Tooltip title="Detail">
                  <ArrowForwardIcon style={{color: theme.primary}}/>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color: '#727070', fontSize: 14}}>1</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Hacking Tutorials</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Information Technology</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Zala Kinga Norbu</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              <TableCell>
                <Tooltip title="Detail">
                  <ArrowForwardIcon style={{color: theme.primary}}/>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color: '#727070', fontSize: 14}}>1</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Hacking Tutorials</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Information Technology</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Zala Kinga Norbu</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>12/12/2022</TableCell>
              <TableCell style={{color: '#727070', fontSize: 14}}>Approved</TableCell>
              <TableCell>
                <Tooltip title="Detail">
                  <ArrowForwardIcon style={{color: theme.primary}}/>
                </Tooltip>
              </TableCell>
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
    </React.Fragment>
  )
}