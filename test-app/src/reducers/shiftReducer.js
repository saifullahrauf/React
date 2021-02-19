import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: "sdfghju76543erth",
    name: "Morning",
    startTime: "08:30",
    endTime: "16:30",
    modifiedDate: "2021-02-11",
  },
];

const shiftReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SHIFT_INFO":
      return [
        ...state,
        {
          id: uuid(),
          name: payload.name,
          startTime: payload.startTime,
          endTime: payload.endTime,
          modifiedDate: payload.modifiedDate,
        },
      ];
    case "DELETE_SHIFT_INFO":
      const copyState = [...state];
      let i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default shiftReducer;
