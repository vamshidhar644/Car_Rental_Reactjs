import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import '../Styles/Service.css';

export default function Services() {
  const [ServicesData, setServiceData] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cars"] { name, price, details, seating, slug, image {asset -> {_id, url}, alt}}`
      )
      .then((ServiceData) => setServiceData(ServiceData))
      .catch(console.error);
  });
  return (
    <div className="servicesContainer">
      <div className="Header">
        <h1>Our Services</h1>
      </div>
      <div className="ServicesBody">
        <div className="ServicesCards">
          {ServicesData.map((service) => (
            <article key={service.slug.current} className="product-card">
              <p className="product-name">{service.name}</p>

              <img src={service.image.asset.url} alt="" />
              {/* {console.log(service)} */}
              <div className="productinfo">
                <p className="Details">{service.details}</p>
                <p className="Seating">
                  Seat Capacity: <span> {service.seating}</span>
                </p>
              </div>
              <p className="product-price">
                <span>Just for </span>Rs. {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
