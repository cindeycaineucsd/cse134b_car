import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CarsPage from './components/car/CarsPage';
import ManageCarPage from './components/car/ManageCarPage'; //eslint-disable-line import/no-named-as-default
import StartNegotiationPage from './components/startnegotiation/StartNegotiationPage';
import BuyerAppointmentPage from './components/appointments/BuyerAppointmentPage';
import Chat from './components/chat/Chat';
import SellerAppointmentPage from './components/appointments/SellerAppointmentPage';
import BuyerInquiriesPage from './components/buyerinquiries/BuyerInquiriesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="cars" component={CarsPage} />
    <Route path="car" component={ManageCarPage} />
    <Route path="car/:id" component={ManageCarPage} />
    <Route path="about" component={AboutPage} />
    <Route path="negotiation" component={StartNegotiationPage} />
    <Route path="appointmentbuyer" component={BuyerAppointmentPage} />
    <Route path="appointmentseller" component={SellerAppointmentPage} />
    <Route path="inquiries" component={BuyerInquiriesPage} />
    <Route path="chat" component={Chat} />
  </Route>
);
