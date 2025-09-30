import Nav from './nav'
import About from './about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
// import './App.css'
import './nav.css'

function App() {


  return (
    <>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
