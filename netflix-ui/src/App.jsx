import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import NotAvailable from './components/NotAvailable';
import TVShows from './pages/TVShows';
import UserLiked from './pages/UserLiked';

function App() {
  return ( 
      <BrowserRouter>
          <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/Signup" element={<Signup/>}/>
              <Route exact path="/" element={<Netflix/>}/>
              <Route exact path="/Player" element={<Player/>}/>
              <Route exact path="/Movies" element={<Movies/>}/>
              <Route exact path="/NotAvailable" element={<NotAvailable/>}/>
              <Route exact path="/TVShows" element={<TVShows/>}/>
              <Route exact path="/myList" element={<UserLiked/>}/>
          </Routes>
      </BrowserRouter>
   );
}

export default App;