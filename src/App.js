import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Page/Home';
import Returent from './Page/Returent';
import SpecialOffer from './Page/SpecialOffer';
import TrackOrder from './Page/Trackorder'
import Bottom from './components/Bottom';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/returent" element={<Returent />} />
          <Route path="/specialoffer" element={<SpecialOffer />} />
          <Route path="/trackorder" element={<TrackOrder />} />
        </Routes>
        <Bottom/>

      </div>
    </Router>
  );
}

export default App;
