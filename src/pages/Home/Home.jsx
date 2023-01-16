import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <main className="container">
      <div className="text-wrapper">
        <h1 className="title">
          so, you want to travel to <span>space</span>
        </h1>
        <p className="para">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="self-end">
        <button className="btn">explore</button>
      </Link>
    </main>
  );
}

export default Home;
