import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CourseCategory from '../CourseCategory';
import './CourseTab.scss';
import {Notify, setProps} from '../../../../shared/components/notification/Notification';
import {courseCategoryApi} from '../../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function CourseTab() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = useState();
  const snackbar = useSnackbar();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setProps(snackbar);
    fetchCourseCategories();
  }, []);

  const fetchCourseCategories = () => {
    courseCategoryApi('get').then(response => {
      setCategories(response.course_categories);
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <Container className={classes.root}>
      <Container className="container-main">
        <Typography className="title1">
          The Bhutan’s largest selection of courses
        </Typography>
        <Typography className="description1">
          Choose your courses from 10,000 different courses available
        </Typography>
      </Container>
      <div position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {categories?.length && categories?.map((category, index) => (
            <Tab label={`${category?.name}`}{...a11yProps(0)} />
          ))}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <CourseCategory/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CourseCategory/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CourseCategory/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CourseCategory/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CourseCategory/>
      </TabPanel>
    </Container>
  );
}
