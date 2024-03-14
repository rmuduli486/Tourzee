import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TourIcon from '@mui/icons-material/Tour';
import ManIcon from '@mui/icons-material/Man';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Tourzee- Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">TABLES</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          {/* </Link> */}
          <Link to="/placeTable" style={{ textDecoration: "none" }}>
            <li>
              <PlaceIcon className="icon" />
              <span>Places</span>
            </li>
          </Link>
          <Link to="/tripTable" style={{ textDecoration: "none" }}>
            <li>
              <LocalAirportIcon className="icon" />
              <span>Trips</span>
            </li>
          </Link>
          <Link to="/virtualTour" style={{ textDecoration: "none" }}>
            <li>
              <TourIcon className="icon" />
              <span>Virtual Tours</span>
            </li>
          </Link>
          <Link to="/adminEmergency" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Emergency</span>
          </li>
          </Link>
          <Link to="/reports" style={{ textDecoration: "none" }}>
          <li>
            <SummarizeIcon className="icon" />
            <span>Reports</span>
          </li>
          </Link>
          <Link to="/adminposts" style={{ textDecoration: "none" }}>
          <li>
            <ManIcon className="icon" />
            <span>Social</span>
          </li>
          </Link>
          {/* <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
