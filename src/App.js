import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import LoginForm from "./Components/Login/LoginForm.js";
import LoginPage from "./Components/Login/LoginPage.js";
import AdminDashboard from "./Components/Admin/adminDashboard.js";
import AddClass from "./Components/Admin/AddClass/addClass.js";
import AddEmployee from "./Components/Admin/AddEmployee/addEmployee.js";
import ManageLeave from "./Components/Admin/Leave/manageLeave.js";
import EmployeeReport from "./Components/Admin/EmployeeReport/employeeReport.js";
import Salary from "./Components/Admin/Salary/Salary.js";
import NewAdmin from "./Components/Admin/NewAdmin/newAdmin.js";
import SalaryReport from "./Components/Admin/SalaryReport/salaryReport.js";
//import YearWiseReport from "./Components/Admin/YearWiseReport/yearWiseReport.js";
import ResetPassword from "./Components/Admin/ResetPassword/resetPassword.js";
import LoginForm from "./Components/Login/LoginF";
import RegisterForm from "./Components/Login/Register";

// Employee Routes
import EmployeeDashboard from "./Components/Employee/employeeDashboard.js";
import ApplyLeave from "./Components/Employee/ApplyLeave/applyLeave.js";
import PrintSalarySlip from "./Components/Employee/PrintSalarySlip/printSalarySlip.js";
import EmployeeSalaryReport from "./Components/Employee/SalaryReport/salaryReport.js";
import ChangePassword from "./Components/Employee/ChangePassword/changePassword.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/Reg" element={<RegisterForm />} />
          <Route path="/admin/" element={<AdminDashboard />}>
            <Route path="addclass" element={<AddClass />} />
            <Route path="addEmployee" element={<AddEmployee />} />
            <Route path="manageLeave" element={<ManageLeave />} />
            <Route path="employeeReport" element={<EmployeeReport />} />
            <Route path="salary" element={<Salary />} />
            <Route path="salaryReport" element={<SalaryReport />} />
            {/* <Route path="yearWiseReport" element={<YearWiseReport />} /> */}
            <Route path="createNewAdmin" element={<NewAdmin />} />
            <Route path="resetPassword" element={<ResetPassword />} />

            <Route path="logout" element={<h1>Logout</h1>} />
          </Route>
          <Route path="/employee/" element={<EmployeeDashboard />}>
            <Route path="applyLeave" element={<ApplyLeave />} />
            <Route path="printSalarySlip" element={<PrintSalarySlip />} />
            <Route path="salaryReport" element={<EmployeeSalaryReport />} />
            <Route path="changePassword" element={<ChangePassword />} />

            <Route path="logout" element={<h1>Logout</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
