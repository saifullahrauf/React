import "../commonComponents/displayTable.css";
import ActionButton from "../commonComponents/actionButton.js";
import { useSelector, useDispatch } from "react-redux";

const ShowShift = () => {
  const dispatch = useDispatch();
  const allShiftsInfo = useSelector((state) => {
    return state.shiftReducer;
  });

  let count = 0;

  return (
    <div className="tableData">
      <div className="tableName">List of All Shifts</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Shift Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Modified Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allShiftsInfo.map((shiftInfo) => {
            return (
              <tr>
                <td>{(count = count + 1)}</td>
                <td>{shiftInfo.name}</td>
                <td>{shiftInfo.startTime}</td>
                <td>{shiftInfo.endTime}</td>
                <td>{shiftInfo.modifiedDate}</td>
                <td>
                  <div className="acBtn">
                    <ActionButton type="edit" />
                    <ActionButton
                      type="delete"
                      func={() => {
                        dispatch({
                          type: "DELETE_SHIFT_INFO",
                          payload: {
                            id: shiftInfo.id,
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

export default ShowShift;
