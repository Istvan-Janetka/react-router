import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import ErrorPage from './Pages/ErrorPage'
import Profile from './Pages/Profile'

function App() {
  return (
    <Router>
      <header>
          <nav>
              <ul>
                <li><Link to="/">Kezdőoldal</Link></li>
                <li> <Link to="/about">Rólunk</Link> </li>
                <li> <Link to="/profile">Profil</Link> </li>
              </ul>
          </nav>
      </header>

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About text="Ez itt a Rólunk oldal" />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route> 
          <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

    </Router>
    
  );
}

export default App;
