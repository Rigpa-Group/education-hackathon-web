import React from 'react';
import Banner from '../banner/Banner';
import FirstStripe from '../firstStripe-landing/FirstStripe';
import CourseTab from '../course-category/course-tab/CourseTab';
import SecondStripe from '../secondStripe-landing/SecondStripe';
import ViewAll from '../view-all/ViewAll';
import {OngoingCourses} from '../Learners/OngoingCourses';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <FirstStripe/>
      <OngoingCourses/>
      <CourseTab/>
      <SecondStripe/>
      <ViewAll/>
    </React.Fragment>
  );
};
