import { sosials } from "@/components/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="left">
        <h1> Shwet's Blogs </h1>
        <p>
          Discover Software Development! Dive into the latest news and
          innovations in the software development world with us. Don't miss our
          insights into the technologies shaping the future of software! Let's
          explore the world of development together.
          <span>#SoftwareDeveloper #TechInnovations 💻</span>
        </p>

        <ul className="sosial">
          {sosials.map((el, idx) => (
            <a
              style={{ display: "flex" }}
              href={el.path}
              target="_blank"
              key={idx}
            >
              {el.icon}
            </a>
          ))}
        </ul>
      </div>
      <div className="right">
        <Image fill src="/images/banner.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Home;
