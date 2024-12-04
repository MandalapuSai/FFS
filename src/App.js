import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// import Sidebar from "./components/Sidebar";
import Sidebar from './components/Sidebar/Sidebar';


import NotFound from './components/NotFound';

import Sign from './components/Sign';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home/*" element={<Sidebar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;
