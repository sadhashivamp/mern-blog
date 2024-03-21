
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import DashboardPage from "./pages/Dashboard";
import Header from './components/Header';
import FooterCom from './components/Footer';

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />

      </Routes>
      <FooterCom />
    </Router>
    </>
  )
}

export default App
