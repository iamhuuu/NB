import axios from "axios";
import { useState, useEffect } from "react";
import ShowList from "./ShowList/ShowList";
import "./Home.css";

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = () => {
    axios.get("https://api.tvmaze.com/schedule").then((response) => {
      const shows = response.data;
      setShows(shows);
    });
  };

  return (
    <div>
      <div className="Header">
        <h2>
          TV <del>Bland</del>
        </h2>
        <p>TV Show and web series database</p>
        <p>
          Create personalised schedules. Episode guide, cast, crew and,
          character information
        </p>
      </div>
      <div className="Body">
        <h2>Last Added Shows</h2>
        <ShowList shows={shows} />
      </div>
    </div>
  );
}

export default Home;
