"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("/api/aboutpage") // call Next.js API route
      .then((res) => res.json())
      .then((data) => setAbout(data.about || {}))
      .catch((err) => console.error(err));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2
              data-aos="zoom-in-right"
              style={{ fontSize: "1.5em", marginTop: "15px" }}
            >
              <strong>{about.title}</strong>
              <br />
            </h2>
          </div>
        </div>
        <div className="row justify-content-lg-around" style={{ marginTop: "20px" }}>
          <div className="col-md-4">
            <Image
              data-aos="zoom-in-right"
              src={about.image}
              width={100}
              height={100}
              alt="About Us"
              layout="responsive"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            className="col-sm-7 d-xl-flex flex-column justify-content-xl-center"
          >
            <div
              className="lead"
              dangerouslySetInnerHTML={{ __html: about.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
