import React from 'react';
import Login from './components/Login/index.jsx';
import Slide_bar from './components/Slider_bar/index.jsx';

import ViewProfile from './components/ViewProfile/ViewProfile.jsx';
import SearchAndFilter from './components/SearchAndFilter/index.jsx';
import Update_Profile from './components/Update_Profile/index.jsx';
import ChangePassword from './components/ChangePassword/index.jsx';
import Profile_page from './pages/Profile/index.jsx';
import Change_pw_page from './pages/Change_password/index.jsx';
import Update_Page from './pages/Update_page/index.jsx';


function App() {
  return (
    <div className="App">
      {/* <Profile_page></Profile_page> */}
      {/* <Change_pw_page></Change_pw_page> */}
      <Update_Page></Update_Page>
    </div>
  );

}

export default App;
