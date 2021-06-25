import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useHistory} from 'react-router-dom';
import {ListUser} from './Users/ListUser';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserManagement() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [querySearch, setQuerySearch] = useState('');
  const [date, setDate] = useState({from_date: '', to_date: ''});
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (event, newValue) => {
    setIsOpen(false);
    setQuerySearch('');
    setDate({from_date: '', to_date: ''});
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Admin" {...a11yProps(0)} style={{color: theme.primary, fontWeight: 900}}/>
          <Tab label="Tutors" {...a11yProps(1)} style={{color: theme.primary, fontWeight: 900}}/>
          <Tab label="Learners" {...a11yProps(2)} style={{color: theme.primary, fontWeight: 900}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ListUser querySearch={querySearch} date={date} role={1} status={true}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ListUser querySearch={querySearch} date={date} role={2} status={true}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ListUser querySearch={querySearch} date={date} role={''} status={false}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
