
import react from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup';
import CreateGroup from './CreateGroup/CreateGroup';
import ViewGroup from './ViewGroup/ViewGroup'

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              OS MANAGER
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/creategroup'}>
                    Create Group
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to={'/projects'}>
                    Projects 
                  </Link> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/CreateGroup" element={<CreateGroup />} />
              <Route path="/ViewGroup" element={<ViewGroup />} />
              <Route path="/home" element={<home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
