import "./place.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spin } from 'antd';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faVrCardboard,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Place = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/places/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="space"></div>
      {loading ? ( // Display the loading effect using Spin
        <Spin tip="Loading...">
          <div style={{ minHeight: '200px' }}></div>
        </Spin>
      ) : (
        <div className="placeContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="placeWrapper">
            <button className="virtualBtn">
              Go to Virtual Tour
              <FontAwesomeIcon
                icon={faVrCardboard}
                style={{ marginLeft: "5px" }}
              />
            </button>
            <button className="planBtn">
              Plan a trip to {data.title}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginLeft: "5px" }}
              />
            </button>
            <h1 className="placeTitle" style={{ fontSize: '30px' }}>{data.name}</h1>
            <div className="placeAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="placeDistance">
              Excellent location – {data.distance}m from {data.city}
            </span>
            <div className="placeImages">
              {data.photos?.map((photo, i) => (
                <div className="placeImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="placeImg"
                  />
                </div>
              ))}
            </div>
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDbEtMrpESGgw6iEoP-FujLUFyrIgkt2QY&center=${data.latitude},${data.longitude}&zoom=16`}
                title="Google Map"
                width="1020"
                height="400"
                frameBorder="0"
                style={{ borderRadius: 20 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              >

              </iframe>




            </div>
            <div className="placeDetails">
              <div className="placeDetailsTexts">
                <h1 className="placeTitle" style={{ fontSize: '20px' }}>About {data.title}</h1>
                <p className="placeDesc">{data.desclong}</p>
                <p className="placeDesc">{data.descsinhala}</p>
              </div>
              <div className="placeDetailsPrice">
                <h1>Local emergency contacts</h1>
                <h4>Fire and rescue services</h4>
                <span>
                  Call 110.
                </span>
                <h4>Medical emergencies</h4>
                <span>
                  Call 110.

                  In Colombo, you can also call (+94 11) 269 1111.
                </span>
                <h4>Police</h4>
                <span>
                  Call 118 or 119 or go to your local police station.
                </span>
                <h4>Tourist police</h4>
                <span>
                  Call (+94 11) 242 1052 or (+94 11) 238 2209.
                </span>


                <Link to="/emergencySafety">
                  <button className="Btn" style={{ backgroundColor: 'red', color: 'white', fontWeight: '400' }}>
                    More safety tips
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
                  </button>
                </Link>

              </div>
            </div>
          </div>

          <h1 className="homeTitle" style={{ paddingBottom: '15px' }}>Nearby places in ,{data.city}</h1>
          <FeaturedProperties city={data.city} />
          <MailList />
          <div className="space"></div>
          <Footer />
        </div>
      )}

    </div>
  );
};

export default Place;
