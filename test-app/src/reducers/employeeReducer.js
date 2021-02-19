import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: "ghjku643svbmnb234",
    deptName: "IOT",
    shiftName: "Morning",
    employeeName: "Saif",
    startDate: "2021-02-11",
    endDate: "2021-12-11",
  },
];

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_EMPLOYEE_INFO":
      return [
        ...state,
        {
          id: uuid(),
          deptName: payload.deptName,
          shiftName: payload.shiftName,
          employeeName: payload.employeeName,
          startDate: payload.startDate,
          endDate: payload.endDate,
        },
      ];
    case "DELETE_EMPLOYEE_INFO":
      const copyState = [...state];
      let i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default employeeReducer;
