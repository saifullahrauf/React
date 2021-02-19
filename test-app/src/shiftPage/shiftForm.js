import "../commonComponents/formStyling.css";
import FormItem from "../commonComponents/formItems.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ShiftForm = (props) => {
  const dispatch = useDispatch();

  const [shiftName, setShiftName] = useState("");
  const [shiftStartTime, setShiftStartTime] = useState("");
  const [shiftEndTime, setShiftEndTime] = useState("");
  let date = new Date();
  let currentDate;
  if (date.getMonth() + 1 < 10) {
    currentDate =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
  } else {
    currentDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }

  useEffect(() => {}, []);

  const changeHandler = (event) => {
    if (event.target.id === "shiftName") {
      setShiftName(event.target.value);
    } else if (event.target.id === "shiftStart") {
      setShiftStartTime(event.target.value);
    } else if (event.target.id === "shiftEnd") {
      setShiftEndTime(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SHIFT_INFO",
      payload: {
        name: shiftName,
        startTime: shiftStartTime,
        endTime: shiftEndTime,
        modifiedDate: currentDate,
      },
    });
  };

  return (
    <form>
      <div className="formTitle">Add Shift</div>
      <div className="formContent">
        <div className="fItems">
          <FormItem
            id="shiftName"
            name="Shift name"
            type="text"
            placeholder="Enter shift name"
            value={shiftName}
            handler={changeHandler}
          />
          <FormItem
            id="shiftStart"
            name="Shift start time"
            type="time"
            value={shiftStartTime}
            handler={changeHandler}
          />
          <FormItem
            id="shiftEnd"
            name="Shift end time"
            type="time"
            value={shiftEndTime}
            handler={changeHandler}
          />
        </div>
        <div className="formButtons">
          <button className="submit" onClick={submitHandler}>
            Submit
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ShiftForm;
