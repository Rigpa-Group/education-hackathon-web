import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {Card, Grid} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import '../../assets/stylesheets/_utility.scss';
import {DashboardCourse} from './AdminView/DashboardCourse/DashboardCourse';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {Notify, setProps} from '../../shared/components/notification/Notification';
import {courseApi} from '../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {userCountAPi} from '../../services/UserServices';

export const Dashboard = () => {
const [userCount, setUserCount] = useState();
const snackbar = useSnackbar();

  useEffect(() => {
    setProps(snackbar);
    fetchUserCount();
  }, []);

  const fetchUserCount = () => {
    userCountAPi('get').then(response => {
      debugger
      setUserCount(response.report);
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <div>
      <Grid container spacing={2} style={{marginTop: 30, marginBottom: 30}}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card style={{backgroundColor: '#E344C0', padding: 20, borderRadius: 15}} className="box-shadow">
            <Grid container>
              <Grid item lg={4} xs={4}>
                <PeopleIcon style={{color: 'white', marginTop: 10, fontSize: 46}}/>
              </Grid>
              <Grid item lg={8} xs={8}>
                <Typography style={{color: 'white', fontSize: 18}}>
                  Admin
                </Typography>
                <Typography style={{color: 'white', fontSize: 26, fontWeight: 900}}>
                  {userCount?.total_admins}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card style={{backgroundColor: '#DBDE35', padding: 20, borderRadius: 15}} className="box-shadow">
            <Grid container>
              <Grid item lg={4} xs={4}>
                <EventAvailableIcon style={{color: 'white', marginTop: 10, fontSize: 46}}/>
              </Grid>
              <Grid item lg={8} xs={8}>
                <Typography style={{color: 'white', fontSize: 18}}>
                  Tutors
                </Typography>
                <Typography style={{color: 'white', fontSize: 26, fontWeight: 900}}>
                  {userCount?.total_tutors}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card style={{backgroundColor: '#B368EE', padding: 20, borderRadius: 15}} className="box-shadow">
            <Grid container>
              <Grid item lg={4} xs={4}>
                <FormatShapesIcon style={{color: 'white', marginTop: 10, fontSize: 46}}/>
              </Grid>
              <Grid item lg={8} xs={8}>
                <Typography style={{color: 'white', fontSize: 18}}>
                  Learners
                </Typography>
                <Typography style={{color: 'white', fontSize: 26, fontWeight: 900}}>
                  {userCount?.total_learners}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card style={{backgroundColor: '#335ee0', padding: 20, borderRadius: 15}} className="box-shadow">
            <Grid container>
              <Grid item lg={4} xs={4}>
                <ImportContactsIcon style={{color: 'white', marginTop: 10, fontSize: 46}}/>
              </Grid>
              <Grid item lg={8} xs={8}>
                <Typography style={{color: 'white', fontSize: 18}}>
                  Courses
                </Typography>
                <Typography style={{color: 'white', fontSize: 26, fontWeight: 900}}>
                  {userCount?.total_courses}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <DashboardCourse/>
    </div>
  );
};
