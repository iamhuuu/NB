import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = (props) => {
  const { rating } = props;

  return (
    <div className="rating">
      {[...Array(5)].map((item, index) => {
        return (
          <FontAwesomeIcon
            size="1x"
            icon={faStar}
            key={index}
            color={Math.round(rating / 2) >= index ? "#fdfd96" : "#FFFFFF"}
          />
        );
      })}
    </div>
  );
};

export default Rating;
