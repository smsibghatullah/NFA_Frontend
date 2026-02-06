"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Services({ isserviceshow }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const res = await fetch("/api/ourservices");
      const json = await res.json();
      if (json.success) {
        setServices(json.data);
      }
    };
    loadServices();
  }, []);

  return (
    <div
      className="container"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {isserviceshow && (
        <div className="row">
          <div className="col">
            <h2 style={{ marginTop: "15px", textAlign: "center" }}>
              <strong>Our Services</strong>
            </h2>
            <p className="text-center">
              Comprehensive Forensic Solutions for Every Investigation.
            </p>
          </div>
        </div>
      )}

      {/* SERVICES GRID */}
      <div className="row service-row">
        {services.map((service, index) => (
          <div key={service.id} className="col-md-4 mb-5">
            <div
              className="text-center service-div"
              style={{
                background: "#ffffff",
                borderRadius: "15px",
                paddingBottom: "10px",
                paddingRight: "10px",
                paddingLeft: "10px",
                height: "100%",
              }}
            >
              <Image
                src={service.image} // this now contains full URL
                width={100}
                height={100}
                alt={service.title}
              />

              <h3
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  fontSize: "1.4em",
                }}
              >
                <strong>{service.title}</strong>
              </h3>

              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
