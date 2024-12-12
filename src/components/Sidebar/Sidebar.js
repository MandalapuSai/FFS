import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes, FaTachometerAlt, FaGasPump, FaUserCheck, FaCreditCard, FaSave, FaSignOutAlt } from 'react-icons/fa';
import { Link, Routes, Route } from 'react-router-dom';
import Pumpsales from '../../components/Pumpsales';
import Create_employee from '../../components/Create_employee';
import Attendence from '../../components/Attendence'
import CreditModule from '../../components/CreditModule'
import SavedData from '../../components/SavedData';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import menuiconhome from '../../assets/images/home_icon.png'
import menuiconhome_2 from '../../assets/images/Pump_icon.png'
import menuiconhome_3 from '../../assets/images/Attendence_icon.png'
import menuiconhome_4 from '../../assets/images/Credit.png'
import menuiconhome_5 from '../../assets/images/data.png'
import Rsp from "../Rsp";
const Sidebar = () => {


  const [userDetails, setUserDetails] = useState({ name: '', Id: '' });
  const location = useLocation();


  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('User'));
  //   console.log(storedUser)
  //   if (!storedUser) {
  //     // navigate('/'); 
  //   } else {
  //     setUserDetails({
  //       name: storedUser.name,
  //       Id: storedUser.Id,
  //     });
  //   }
  // }, []);

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



  // true  navbar hide/Show
  const [isExpanded, setIsExpanded] = useState(false);
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
          <div className="name_lable">
            SAI KRISHNA<br />
            FUEL FILLING STATION
          </div>
        )}

        {isExpanded && (
          <div>
            <ul className="sidebar-menu" >
              <li className="txt" style={{ backgroundColor: location.pathname === "/home/dashboard" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome} />
                <Link to="/home/dashboard" className="menu_link_dashboard">
                  &nbsp;Dashboard
                </Link>
              </li>
              <li className="txt" style={{ backgroundColor: location.pathname === "/home/rsp" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_4} />
                <Link to="/home/rsp" className="menu_link_dashboard">
                  &nbsp;RSP
                </Link>
              </li>

              <li className="txt" style={{ backgroundColor: location.pathname === "/home/pump" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_2} />
                <span className="sidebar-text">&nbsp;
                  <Link to="/home/pump" className="menu_link_dashboard">&nbsp;Pump Sales</Link>
                </span>
              </li>

              <li className="txt" style={{ backgroundColor: location.pathname === "/home/create" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_3} />
                <span className="sidebar-text">&nbsp;
                  <Link to="/home/create" className="menu_link_dashboard">&nbsp;Create Employee</Link>
                </span>

              </li>

              <li className="txt" style={{ backgroundColor: location.pathname === "/home/attendence" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_3} />
                <span className="sidebar-text">&nbsp;
                  <Link to="/home/attendence" className="menu_link_dashboard">&nbsp;Attendence</Link>
                </span>
              </li>
              <li className="txt" style={{ backgroundColor: location.pathname === "/home/credit" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_4} />
                <span className="sidebar-text">&nbsp;
                  <Link to="/home/credit" className="menu_link_dashboard">&nbsp;Credit Module</Link>
                </span>
              </li>
              <li className="txt" style={{ backgroundColor: location.pathname === "/home/save" ? "#dfe3f0" : "transparent" }}>
                <img className="menuiconhome1" src={menuiconhome_5} alt="productName" />

                <span className="sidebar-text">&nbsp;
                  <Link to="/home/save" className="menu_link_dashboard">&nbsp;Saved Data</Link>
                </span>
              </li>
            </ul>
            <div className="sidebar-footer">
              <button className="logoutbutton" onClick={LogOut}>LogOut</button>
            </div>
          </div>
        )}
      </div>
      <div className="content-container" style={{ overflow: 'scroll' }}>
        {location.pathname === "/home/dashboard" && (

          <div className="welcome_lable">Welcome,&nbsp;{userDetails?.name}&nbsp;({userDetails?.Id})</div>

        )}
        <Routes>
          <Route path="rsp" element={<Rsp />} />
          <Route path="pump" element={<Pumpsales />} />
          <Route path="create" element={<Create_employee />} />
          <Route path="attendence" element={<Attendence />} />
          <Route path="credit" element={<CreditModule />} />
          <Route path="save" element={<SavedData />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;