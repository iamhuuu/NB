import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

interface StarringProps {
  showId: number;
}

interface Actor {
  person: {
    name: string;
    image: {
      medium: string;
    };
  };
  character: {
    name: string;
  };
}

const Starring: React.FC<StarringProps> = (props) => {
  const { showId } = props;

  const [cast, setCast] = useState<any>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${showId}/cast`)
      .then((response) => {
        const cast = response.data;
        setCast(cast);
        setLoaded(true);
        return;
      });
  }, [showId]);

  return (
    <>
      {!loaded ? (
        <div>Loading</div>
      ) : (
        <div className="starring">
          <table>
            <thead>
              <tr>Starring</tr>
            </thead>
            <tbody>
              {cast.length === 0 ? (
                <p>
                  <FontAwesomeIcon size="1x" icon={faExclamationTriangle} /> No
                  cast information available
                </p>
              ) : (
                cast.map((actor: Actor, i: number) => (
                  <tr key={i}>
                    <td>
                      {!actor.person?.image?.medium ? (
                        <FontAwesomeIcon size="3x" icon={faUserCircle} />
                      ) : (
                        <img
                          className="avatar"
                          src={actor.person.image.medium}
                          alt="alternativeText"
                        />
                      )}
                    </td>
                    <td>{actor.person.name}</td>
                    {actor.person.name !== actor.character.name && (
                      <td>{actor.character.name}</td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Starring;
