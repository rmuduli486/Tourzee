import {
  faLocationDot,
  faPerson,
  faRoad,
  faTruckMedical,
  faVrCardboard
} from "@fortawesome/free-solid-svg-icons";
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useContext, useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = ({ type }) => {

  const headerTitleLines = [
    "Discover your next adventure with our travel site, where dreams become destinations.",
    "Explore the world's wonders and plan your perfect getaway with ease.",
    "Unleash your wanderlust and embark on unforgettable journeys with our travel expertise.",
    "From exotic escapes to local gems, let us guide you to extraordinary experiences."
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % headerTitleLines.length);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handleSearch = () => {
    const capitalizedDestination = destination.charAt(0).toUpperCase() + destination.slice(1);
    navigate("/places", { state: { destination: capitalizedDestination } });
  };
  

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faRoad} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <Link to="/socialsharing" className="linkStyle">
              <FontAwesomeIcon icon={faPerson} />
              <span style={{ marginLeft: '8px' }}>Social</span>
            </Link>
          </div>


          <div className="headerListItem">
            <Link to="/emergencySafety" className="linkStyle">
              <FontAwesomeIcon icon={faTruckMedical} />
              <span style={{ marginLeft: '8px' }}>Safety</span>
            </Link>
          </div>
          <div className="headerListItem">
            <Link to="/virtualTour" className="linkStyle">
              <FontAwesomeIcon icon={faVrCardboard} />
              <span style={{ marginLeft: '8px' }}>Virtual Tour</span>
            </Link>
          </div>
          {/* <Badge badgeContent={100} classes={{ badge: 'custom-badge' }}> */}
            <div className="headerListItem">
              <Link to="/planatrip" className="linkStyle">
                <FontAwesomeIcon icon={faLocationDot} className="iconStyle" />
                <span>Start a Trip</span>
              </Link>
            </div>
          {/* </Badge> */}
        </div>

        {type !== "list" && (
          <>
            <div className="headerTitle">
              <h1 className="headerTitleLine">
                {headerTitleLines[currentLine]}
              </h1>
            </div>
            <p className="headerDesc">
              "Discover the Wonders of India with Tourzee"
            </p>
            {!user && <Link to="/register" className="linkStyle"><button className="headerBtn">Sign in / Register</button></Link>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faRoad} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="space"></div>
              <button className="headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Header;


