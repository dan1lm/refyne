import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import LearnMore from './components/pages/LearnMore'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path = '/about-us' element={<AboutUs />}/>
      <Route path = '/learn-more' element={<LearnMore />}/>
      <Route path = '/contact' element={<Contact />}/>
    </Routes>
    </Router>
    </>
  )
}
export default App;
