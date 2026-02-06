"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAboutPost } from "@/app/api/about-post/route";

export default function About() {
  return <AboutUs />;
}

const AboutUs = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAboutPost();
      setAbout(data);
    };
    loadData();
  }, []);

  if (!about) return null;

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE COLUMN */}
          <div className="col-md-5 position-relative about-img-wrapper">

            {/* IMAGE 1 */}
            {about.img1 && (
              <Image
                src={about.img1}
                width={500}
                height={350}
                alt="About Image 1"
                className="img-fluid about-img-main"
              />
            )}

            {/* IMAGE 2 (OVERLAP) */}
            {about.img2 && (
              <Image
                src={about.img2}
                width={350}
                height={250}
                alt="About Image 2"
                className="img-fluid about-img-overlay"
              />
            )}

          </div>

          {/* CONTENT */}
          <div className="col-md-6 offset-md-1">
            <h2 style={{ fontSize: "2em", marginBottom: "20px" }}>
              <strong>{about.title}</strong>
            </h2>

            <div
              className="lead"
              dangerouslySetInnerHTML={{ __html: about.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
