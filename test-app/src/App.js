import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTop from "./commonComponents/navTop.js";
import NavLeft from "./commonComponents/navLeft.js";
import ShiftForm from "./shiftPage/shiftForm.js";
import ShowShift from "./shiftPage/shiftTable.js";
import EmployeeForm from "./employeePage/employeeForm.js";
import ShowEmployeeDepartment from "./employeePage/employeeTable.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="leftNav">
          <NavLeft />
        </div>
        <div className="rightBody">
          <NavTop />
          <div className="content">
            <Route path="/shift" component={ShiftForm} />
            <Route path="/shift" exact component={ShowShift} />
            <Route path="/employeedept" component={EmployeeForm} />
            <Route path="/employeedept" component={ShowEmployeeDepartment} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
