import React, { useState } from 'react';
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Rate } from 'antd';
const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

const Featured = () => {
  const { data, loading, error } = useFetch('/trips');
  const [value1, setValue1] = useState(5); // Separate state for the first Rate
  const [value2, setValue2] = useState(5); // Separate state for the second Rate
  const [value3, setValue3] = useState(5); // Separate state for the third Rate

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://snaptoro.com/wp-content/uploads/2023/03/Munnar-Tea-Plantations-Places-To-Visit-in-Kerala.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h3>Munnar</h3>
              <span style={{ fontSize: '14px' }}>
                <Rate
                  tooltips={desc}
                  disabled
                  onChange={setValue1} // Use setValue1 for the first Rate
                  value={value1}
                  style={{ fontSize: '14px' }}
                />
                {value1 ? <span className="ant-rate-text">{desc[value1 - 1]}</span> : ''}
              </span>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h3>Agra</h3>
              <span style={{ fontSize: '14px' }}>
                <Rate
                  tooltips={desc}
                  disabled
                  onChange={setValue2} // Use setValue2 for the second Rate
                  value={value2}
                  style={{ fontSize: '14px' }}
                />
                {value2 ? <span className="ant-rate-text">{desc[value2 - 1]}</span> : ''}
              </span>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://royalleisuretours.com/wp-content/uploads/2016/02/Tourist-places-in-Goa-768x485.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h3>Goa</h3>
              <span style={{ fontSize: '14px' }}>
                <Rate
                  tooltips={desc}
                  disabled
                  onChange={setValue3} // Use setValue3 for the third Rate
                  value={value3}
                  style={{ fontSize: '14px' }}
                />
                {value3 ? <span className="ant-rate-text">{desc[value3 - 1]}</span> : ''}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
