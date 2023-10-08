import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home, Login } from './screens'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
