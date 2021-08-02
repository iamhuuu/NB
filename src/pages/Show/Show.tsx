import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ShowInfo from "./ShowInfo/ShowInfo";
import Starring from "./Starring/Starring";
import "./Show.css";

interface ShowProps {
  id: string;
}

function Show() {
  const { id } = useParams<ShowProps>();

  const [show, setShow] = useState<any>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getShow(id);
  }, [id]);

  const getShow = (id: string) => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
      const show = response.data;
      setShow(show);
      setLoaded(true);
      return;
    });
  };

  return (
    <>
      {!loaded ? (
        <FontAwesomeIcon size="2x" icon={faSpinner} spin pulse />
      ) : (
        <div className="show">
          <h1>TV Bland</h1>
          <div className="showHeader">
            <div className="showImage">
              <img src={show.image.medium} alt="alternatetext" />
            </div>
            <div className="showSummary">
              <Rating rating={show.rating.average} />
              <h1>{show.name}</h1>
              <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            </div>
          </div>
          <div className="showBody">
            <ShowInfo show={show} />
            <Starring showId={show.id} />
          </div>
        </div>
      )}
    </>
  );
}

export default Show;
