import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import Tabla from './Tabla'
import Footer from './Footer'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/tabla" element={<Tabla />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
