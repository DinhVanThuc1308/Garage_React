import React from 'react';
import Login from './pages/Authorization/Login/index.jsx';
// import Slide_bar from './components/Slider_bar/index.jsx';
// import ChangePassword from './components/ChangePassword/index.jsx';
import Slide_bar from './components/Slider_bar/index.jsx';

import ViewProfile from './components/ViewProfile/ViewProfile.jsx';
import SearchAndFilter from './components/SearchAndFilter/index.jsx';
import Update_Profile from './components/Update_Profile/index.jsx';
import ChangePassword from './components/ChangePassword/index.jsx';
import Profile_page from './pages/Profile/index.jsx';
import Change_pw_page from './pages/Change_password/index.jsx';
import Update_Page from './pages/Update_page/index.jsx';
import Garage_Details from './pages/Garage_Detail/index.jsx';


function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Slide_bar></Slide_bar> */}
      {/* <Profile_page></Profile_page> */}
      {/* <Change_pw_page></Change_pw_page> */}
      {/* <Update_Page></Update_Page> */}
      <Garage_Details></Garage_Details>
    </div>
  );

}

export default App;
