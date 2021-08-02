import { Show } from "../../../types";

interface ShowInfoProps {
  show: Show;
}

const ShowInfo: React.FC<ShowInfoProps> = (props) => {
  const { show } = props;

  return (
    <div className="showInfo">
      <table>
        <thead>
          <tr>Show info</tr>
        </thead>
        <tbody>
          <tr>
            <td>Streamed on</td>
            <td>{show.network.name}</td>
          </tr>
          <tr>
            <td>Schedule</td>
            <td>{show.schedule.days.join(", ")}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{show.status}</td>
          </tr>
          <tr>
            <td>Genres</td>
            <td>{show.genres.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowInfo;
