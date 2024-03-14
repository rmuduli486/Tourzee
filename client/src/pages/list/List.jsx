import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  const { data, loading, error, reFetch } = useFetch(
    `/places?city=${destination}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">

          <div className="listResult">
            <p style={{ paddingBottom: "20px", paddingBTop: "20px", fontSize: "16px" }}>
              <span style={{ color: "gray" }}>Places around,</span> {destination} <FontAwesomeIcon icon={faLocationDot} />
            </p>
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
