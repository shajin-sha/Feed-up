import "./UserAnim.css";
import icon from "./autorenew_white_24dp.svg";
import verified from "./verified_user_white_24dp.svg";

export default function UserAnim(props) {
  return (
    <div style={{
      top: props.post ? '0%' :'100vh',
    }} className="UserAnimSENDINGData">
      {props.Respon ? null : (
        <img
          style={{
            animationName: "IconLOd",
          }}
          className="Icon"
          src={icon}
          alt="loading"
        />
      )}

      {props.Respon && (
        <div className="all-done">
          <img className="verified" src={verified} alt="verified" />
          <h3>All Done</h3>
        </div>
      )}
    </div>
  );
}
