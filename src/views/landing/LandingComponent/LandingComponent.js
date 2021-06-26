import React from 'react';
import Banner from '../banner/Banner';
import FirstStripe from '../firstStripe-landing/FirstStripe';
import CourseTab from '../course-category/course-tab/CourseTab';
import SecondStripe from '../secondStripe-landing/SecondStripe';
import ViewAll from '../view-all/ViewAll';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <FirstStripe/>
      <CourseTab/>
      <SecondStripe/>
      <ViewAll/>
    </React.Fragment>
  );
};
