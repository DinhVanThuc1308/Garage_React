
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import Slider_bar from './components/Slider_bar/Slider_bar';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Slider_bar></Slider_bar>
    </div>
  );
}

export default App;
