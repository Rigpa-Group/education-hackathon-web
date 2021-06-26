import React, {useEffect, useState} from 'react';
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
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../shared/components/notification/Notification';
import {courseApi} from '../../../../services/CourseServices';
import Moment from 'react-moment';

export const DashboardCourse = () => {
  const snackbar = useSnackbar();
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  useEffect(() => {
    setProps(snackbar);
    fetchCourses();
  }, [page, rowsPerPage]);

  const fetchCourses = () => {
    courseApi('get', null, {
      page: page,
      per_page: rowsPerPage,
    }).then(response => {
      setTotal(response.meta.total);
      setCourses(response.courses);
    }).catch(err => Notify(err, 'error'));
  };

  const handlePageChange = (event, page) => {
    setPage(page + 1);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setPage(1);
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
        </Grid>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Sl.no</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Course Title</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Course Category</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Posted Date</TableCell>
                <TableCell style={{color: theme.primary, fontSize: 18}}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length > 0 && courses?.map((course, index) => (
                <TableRow key={index}>
                <TableCell style={{color: '#727070', fontSize: 14}}>{index+1}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>{course?.name}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>{course?.course_category?.name}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}><Moment format="LL" withTitle>{course?.created_at}</Moment></TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>{course?.status}</TableCell>
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
      </Card>
    </div>
  );
};