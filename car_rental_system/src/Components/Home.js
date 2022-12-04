import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import '../Styles/Home.css';

export default function Home() {
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"] {title, subtitle, image {asset -> {_id, url}, alt}}`
      )
      .then((HomeData) => setHomeData(HomeData))
      .catch(console.error);
  });
  return (
    <div>
      {HomeData.map((homedata) => (
        <div>
          <div className="Home-Container">
            <img src={homedata.image.asset.url} alt="" />
            <h1>{homedata.title}</h1>
            <h4>{homedata.subtitle}</h4>
            <div className="BookBtn">
              <a href="/services">Book a Ride</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
