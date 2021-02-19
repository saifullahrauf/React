import "./formItems.css";
import { useSelector } from "react-redux";

const FormItem = (props) => {
  const allShifts = useSelector((state) => {
    return state.shiftReducer;
  });
  const allEmployees = useSelector((state) => {
    return state.employeeReducer;
  });

  if (props.type !== "select") {
    return (
      <div className="formItem">
        <label for={props.id}>{props.name}</label>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handler}
        ></input>
      </div>
    );
  } else {
    if (props.id === "emp") {
      return (
        <div className="formItem">
          <label for={props.id}>{props.name}</label>
          <select id={props.id} value={props.value} onClick={props.handler}>
            {allEmployees.map((employee) => {
              return (
                <option value={employee.employeeName}>
                  {employee.employeeName}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else if (props.id === "shift") {
      return (
        <div className="formItem">
          <label for={props.id}>{props.name}</label>
          <select id={props.id} value={props.value} onClick={props.handler}>
            {allShifts.map((shift) => {
              return <option value={shift.name}>{shift.name}</option>;
            })}
          </select>
        </div>
      );
    }
  }
};

export default FormItem;
