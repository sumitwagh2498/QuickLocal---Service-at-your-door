// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { NavigationBarOfService } from './Components/NavigationBarOfService';
import { AdminLogin } from './Components/AdminLogin';
import { UserLogin } from './Components/UserLogin';
import { AdminReg } from './Components/AdminReg';
import { UserReg } from './Components/UserReg';
import { ServiceProviderReg } from './Components/ServiceProviderReg';
import { ServiceProviderLogin } from './Components/ServiceProviderLogin';
import { HomeBeforeLogin } from './Components/HomebeforeLogin';
import { AboutUs } from './Components/AboutUs';
import { ContactUs } from './Components/ContactUs';
import { ServiceBeforeLogin } from './Components/ServiceBeforeLogin';
import ServiceHome from './Components/ServiceHome';
import ServiceForm from './Components/ServiceForm';
import { ServiceHelp } from './Components/ServiceHelp';
import { NavigationBarAdmin } from './Components/NavigationBarAdmin';
import { RequestOfSP } from './Components/RequestOfSP';
import { ApprovedReq } from './Components/ApprovedReq';
import Services from './Components/Services'; // Changed import statement
import MyService from './Components/MyService';
import UserOrdersOnService from './Components/UserOrdersOnService';
import OrderForm from './Components/OrderForm';
import BookedOrder from './Components/BookedOrder';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* Routes for common navigation bar */}
          <Route path="/admin-login" element={<AdminLogin className="login" />} />
          <Route path="/user-login" element={<UserLogin className="login" />} />
          <Route path="/service-provider-login" element={<ServiceProviderLogin className="login" />} />
          <Route path="/AdminReg" element={<AdminReg />} />
          <Route path="/UserReg" element={<UserReg />} />
          <Route path="/ServiceProviderReg" element={<ServiceProviderReg />} />
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/service" element={<ServiceBeforeLogin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Routes for service provider after successful login */}
          <Route path="/service-provider-dashboard/*" element={<ServiceHome />} />
          <Route path="/provider-form/*" element={<ServiceForm />} />
          <Route path="/help/*" element={<ServiceHelp />} />
          <Route path="/admin-dashboard/*" element={<RequestOfSP />} />
          <Route path="/service-approved/*" element={<ApprovedReq />} />
          <Route path="/user-dashboard/*" element={<Services />} />
          <Route path="/booked-service/*" element={<BookedOrder/>} />
          <Route path="/services/*" element={<MyService />} />
          <Route path="/orders/*" element={<UserOrdersOnService />} />

          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
