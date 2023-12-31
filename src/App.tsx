import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home, Login, MyDashboard,Dashboard, SignUp, BookInfo} from './screens';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyDashboard" element={<MyDashboard />} />
          <Route path="/BookInfo" element={<BookInfo />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
