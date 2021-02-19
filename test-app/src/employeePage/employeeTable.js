import "../commonComponents/displayTable.css";
import ActionButton from "../commonComponents/actionButton.js";
import { useSelector, useDispatch } from "react-redux";

const ShowEmployeeDepartment = (props) => {
  const dispatch = useDispatch();
  const allEmployeesInfo = useSelector((state) => {
    return state.employeeReducer;
  });

  let count = 0;

  return (
    <div className="tableData">
      <div className="tableName">List of All Employee Departments</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Shift</th>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allEmployeesInfo.map((employeeInfo) => {
            return (
              <tr>
                <td>{(count = count + 1)}</td>
                <td>{employeeInfo.deptName}</td>
                <td>{employeeInfo.shiftName}</td>
                <td>{employeeInfo.employeeName}</td>
                <td>{employeeInfo.startDate}</td>
                <td>{employeeInfo.endDate}</td>
                <td>
                  <div className="acBtn">
                    <ActionButton type="edit" />
                    <ActionButton
                      type="delete"
                      func={() => {
                        dispatch({
                          type: "DELETE_EMPLOYEE_INFO",
                          payload: {
                            id: employeeInfo.id,
                          },
                        });
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEmployeeDepartment;
