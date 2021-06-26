import React, {useEffect, useState} from 'react';
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import RenderAuthorized from '../../routes/RenderAuthorized';
import TablePagination from '@material-ui/core/TablePagination';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Tooltip from '@material-ui/core/Tooltip';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../shared/components/notification/Notification';
import {courseAction, courseApi} from '../../services/CourseServices';
import Moment from 'react-moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteCategoryDialog from './DeleteCategoryDialog/DeleteCategoryDialog';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    float: 'right',
    marginBottom: 30,
    marginRight: 25,
  }
}));

export const ListCourse = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const snackbar = useSnackbar();
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [id, setId] = useState('');
  const [open, setOpen] = React.useState(false);

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

  const addCourse = () => {
    history.push('/course/add');
  };

  const handleDetail = (id) => {
    history.push(`/course/detail/${id}`);
  };

  const handleOpen = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = (result) => {
    setOpen(false);
    if (result) {
      courseAction('delete', id).then(res => {
        Notify('Event Category deleted successfully', 'success');
        fetchCourses();
      }).catch(err => {
        Notify(err, 'error');
      });
    }
  };

  const courseUpdate = (id) => {
    history.push(`/course/${id}?edit=${true}`)
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
              <TableCell style={{color: theme.primary, fontSize: 18}}>Created Date</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Status</TableCell>
              <TableCell style={{color: theme.primary, fontSize: 18}}>Action</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.length > 0 && courses?.map((course, index) => (
              <TableRow key={index}>
                <TableCell style={{color: '#727070', fontSize: 14}}>{index + 1}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}
                           className="text-capitalize">{course?.name}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}>{course?.course_category?.name}</TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}><Moment format="LL"
                                                                            withTitle>{course?.created_at}</Moment></TableCell>
                <TableCell style={{color: '#727070', fontSize: 14}}
                           className="text-capitalize">{course?.status}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <EditIcon color="primary" style={{cursor: 'pointer'}} className="mr-3"
                      onClick={() => courseUpdate(course?.id)}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteIcon color="secondary" style={{cursor: 'pointer'}}
                      onClick={() => handleOpen(course?.id)}
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Detail">
                    <ArrowForwardIcon style={{color: theme.primary}} onClick={() => handleDetail(course?.id)}/>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DeleteCategoryDialog open={open} handleAction={handleDelete}/>
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
