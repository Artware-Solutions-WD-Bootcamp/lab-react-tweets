import ProfileImage from "./ProfileImage";
import User from "./User.js";
import Timestamp from "./Timestamp.js";
import Message from "./Message.js";
import Actions from "./Actions.js";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
