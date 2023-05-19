import React from 'react';
import Login from './pages/Authorization/Login/index.jsx';
import { Route, Routes } from 'react-router-dom';

// import ChangePassword from './components/ChangePassword/index.jsx';
import Slide_bar from './components/Slider_bar/index.jsx';

import SearchAndFilter from './components/SearchAndFilter/index.jsx';
import Update_Profile from './components/Update_Profile/index.jsx';
import ChangePassword from './components/ChangePassword/index.jsx';
import Change_pw_page from './pages/Change_password/index.jsx';
import Update_Page from './pages/Update_page/index.jsx';
import Page_update_owner from './pages/Page_update_owner/Page_update_owner.jsx';
import CreateOwner_page from './pages/CreateOwner_page/index.jsx';
import CreateGarage_page from './pages/CreateGarage_page/index.jsx';
import ViewProfile_page from './pages/ViewProfile_page/index.jsx';
import Garage_Detail from './pages/Garage_Detail/index.jsx';
import GarageOwner from './pages/GarageOwner/index.jsx';
import { AuthRoutes, GuestRoutes } from './middleware/PrivateRoutes.js';
import UpdateService_page from './pages/UpdateService_page/index.jsx';
import Profile_page from './pages/ViewProfile_page/index.jsx';
import UpdateManagement from './pages/Page_update_management/Page_update_management.jsx';
import GarageService from './pages/Garage_Service_page/index.jsx';
import DetailService from './pages/DetailService/index.jsx';
import GarageManage_page from './pages/garage_manage_page/index.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/" element={<Profile_page />} />

          <Route path="/change_password" element={<Change_pw_page />} />
          <Route path="/update" element={<Update_Page />} />
          <Route path="/create_owner" element={<CreateOwner_page />} />
          <Route path="/view_profile" element={<ViewProfile_page />} />
          <Route path="/garage_detail" element={<Garage_Detail />} />
          <Route path="/update_owner" element={<Page_update_owner />} />
          <Route path="/garage_owner" element={<GarageOwner />} />
          <Route path="/create_garage" element={<CreateGarage_page />} />
          <Route path="/update_service" element={<UpdateService_page />} />
          <Route path="/update_management/:id" element={<UpdateManagement />} />
          <Route path="/Garage_service" element={<GarageService />} />
          <Route path="/service_detail" element={<DetailService />} />
          <Route path="/Garage_manage" element={<GarageManage_page />} />
        </Route>
      </Routes>

      {/* <Garage_Detail/> */}
      {/* <Update_Profile/> */}
      {/* <Login></Login> */}
      {/* <Page_update_owner></Page_update_owner> */}
      {/* <Change_pw_page/> */}
      {/* <ViewProfile></ViewProfile> */}
      {/* <Profile_page></Profile_page> */}
      {/* <Change_pw_page></Change_pw_page> */}
      {/* <Update_Page></Update_Page> */}
      {/* <CreateOwner_page></CreateOwner_page> */}
      {/* <ViewProfile_page /> */}
      {/* <DetailService/> */}
    </div>
  );
}

export default App;
