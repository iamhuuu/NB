import { Link } from "react-router-dom";
import Rating from "../../../components/Rating/Rating";
import { Series } from "../../../types";
import "./ShowList.css"

interface ShowListProps {
  shows: Array<Series>
}

const ShowList : React.FC<ShowListProps> = (props) => {
const { shows } = props;

    return (
      <div className="showList">
          {shows.map((show: Series, i: number) => (
            <Link to={`/show/${show.show.id}`} key={i}>
              <div className="showOverview" data-testid='showOverview'>
                  <img src={show.show.image?.medium} alt="alternatetext"/> 
                  <Rating rating={show.show.rating.average} />
                  <div dangerouslySetInnerHTML={{__html: show.show.name}}></div>
              </div>
            </Link>
          ))}
      </div>
    );
  }

export default ShowList