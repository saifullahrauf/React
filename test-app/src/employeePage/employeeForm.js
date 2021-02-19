import "../commonComponents/formStyling.css";
import FormItem from "../commonComponents/formItems.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const EmployeeForm = (props) => {
  const dispatch = useDispatch();
  const [deptName, setDeptName] = useState("");
  const [shiftName, setShiftName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {}, []);

  const changeHandler = (event) => {
    if (event.target.id === "deptName") {
      setDeptName(event.target.value);
    } else if (event.target.id === "shift") {
      setShiftName(event.target.value);
    } else if (event.target.id === "emp") {
      setEmployeeName(event.target.value);
    } else if (event.target.id === "startDate") {
      setStartDate(event.target.value);
    } else if (event.target.id === "endDate") {
      setEndDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_EMPLOYEE_INFO",
      payload: {
        deptName: deptName,
        shiftName: shiftName,
        employeeName: employeeName,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  return (
    <form>
      <div className="formTitle">Assign Employee Department</div>
      <div className="formContent">
        <div className="fItems">
          <FormItem
            id="deptName"
            name="Department Name"
            type="text"
            placeholder="Select Department Name"
            value={deptName}
            handler={changeHandler}
          />
          <FormItem
            id="shift"
            name="Shift"
            type="select"
            placeholder="Select Shift"
            handler={changeHandler}
          />
          <FormItem
            id="emp"
            name="Employee"
            type="select"
            placeholder="Select Employee"
            handler={changeHandler}
          />
          <FormItem
            id="startDate"
            name="Start Date"
            type="date"
            placeholder="Start Date"
            value={startDate}
            handler={changeHandler}
          />
          <FormItem
            id="endDate"
            name="End Date"
            type="date"
            placeholder="End Date"
            value={endDate}
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

export default EmployeeForm;
