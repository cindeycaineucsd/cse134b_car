import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import StartNegotiationPage from './components/startnegotiation/StartNegotiationPage';
import BuyerAppointmentPage from './components/appointments/BuyerAppointmentPage';
import Chat from './components/chat/Chat';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartNegotiationPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="negotiation" component={StartNegotiationPage} />
    <Route path="appointmentbuyer" component={BuyerAppointmentPage} />
    <Route path="chat" component={Chat} />
  </Route>
);
