import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes, FaTachometerAlt, FaGasPump, FaUserCheck, FaCreditCard, FaSave, FaSignOutAlt } from 'react-icons/fa';
import { Link, Routes, Route } from 'react-router-dom';
import Pumpsales from '../../components/Pumpsales';
import Create_employee from '../../components/Create_employee';
import Attendence from '../../components/Attendence'
import CreditModule from '../../components/CreditModule'
import SavedData from '../../components/SavedData';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Sidebar = () => {


  const [userDetails, setUserDetails] = useState({ name: '', Id: '' });



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('User'));
    if (storedUser && storedUser.isValidUser) {
      const UserDetails = storedUser.isValidUser;
      console.log(UserDetails);
      setUserDetails({
        name: UserDetails.name,
        Id: UserDetails.Id
      });
    } else {
      console.log("User data not found");
    }
  }, []);



  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
    setIsPumpSalesExpanded(false)

  };

  const [isPumpSalesExpanded, setIsPumpSalesExpanded] = useState(false);

  const togglePumpSalesMenu = () => {
    setIsPumpSalesExpanded(!isPumpSalesExpanded);
  };


  const LogOut = () => {
    localStorage.removeItem('User');
    toast.success("LoggedOut SuccessFully")
    navigate('/');
  }

  return (
    <div className="main-container">
      <div className={`sidebar-container ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isExpanded ? <FaTimes /> : <FaBars />}
        </div>

        {isExpanded && (
          <div style={{ textAlign: 'center', padding: '10px' }}>
            SAI KRISHNA<br />
            FUEL FILLING STATION
          </div>
        )}

        {isExpanded && (
          <div>
            <ul className="sidebar-menu">
              <li>
                <FaTachometerAlt className="me-2" />
                <span className="sidebar-text">&nbsp;Dashboard</span>
              </li>

              <li>
                <FaGasPump className="me-2" />
                <span className="sidebar-text">&nbsp;
                  <Link to="/pump" style={{ textDecoration: 'none', color: 'black' }}>&nbsp;Pump Sales</Link>
                </span>
              </li>

              <li>
                <FaSignOutAlt className="me-2" />
                <span className="sidebar-text">&nbsp;
                  <Link to="/create" style={{ textDecoration: 'none', color: 'black' }}>&nbsp;Create Employee</Link>
                </span>

              </li>

              <li>
                <FaUserCheck className="me-2" />
                <span className="sidebar-text">&nbsp;
                  <Link to="/attendence" style={{ textDecoration: 'none', color: 'black' }}>&nbsp;Attendence</Link>
                </span>
              </li>
              <li>
                <FaCreditCard className="me-2" />
                <span className="sidebar-text">&nbsp;
                  <Link to="/credit" style={{ textDecoration: 'none', color: 'black' }}>&nbsp;Credit Module</Link>
                </span>
              </li>
              <li>
                <FaSave className="me-2" />

                <span className="sidebar-text">&nbsp;
                  <Link to="/save" style={{ textDecoration: 'none', color: 'black' }}>&nbsp;Saved Data</Link>
                </span>
              </li>
            </ul>
            <div className="sidebar-footer">
              <button className="loggg" onClick={LogOut}>LogOut</button>
            </div>
          </div>
        )}
      </div>
      <div className="content-container">
        <div>
          <h2 style={{ color: 'blue' }}>Welcome,&nbsp;{userDetails?.name}&nbsp;({userDetails?.Id})</h2>
        </div>
        <Routes>
          <Route path="/pump" element={<Pumpsales />} />
          <Route path="/create" element={<Create_employee />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/credit" element={<CreditModule />} />
          <Route path="/save" element={<SavedData />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
