import "./actionButton.css";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

const ActionButton = (props) => {
  if (props.type === "edit") {
    return (
      <div
        className="action-button"
        style={{ backgroundColor: "rgb(64, 160, 0)" }}
        onClick={props.func}
      >
        <EditIcon color="action" style={{ fill: "#ffffff" }} />
      </div>
    );
  } else if (props.type === "delete") {
    return (
      <div
        className="action-button"
        style={{ backgroundColor: "rgb(200, 0, 0)" }}
        onClick={props.func}
      >
        <ClearIcon color="action" style={{ fill: "#ffffff" }} />
      </div>
    );
  } else {
    return <div className="action-button" onClick={props.func}></div>;
  }
};

export default ActionButton;
