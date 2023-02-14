
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import {useState,useEffect} from 'react';

function App() {
  
  const[selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Team B");

  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[{
        id: 1,
        fullName: "Ben Øhman",
        designation: "JavaScript Utvikler",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Tone Merete Christensen",
        designation: "Node Utvikler",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Andrea Sommerseth",
        designation: "Java Utvikler",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Jarl Opedal",
        designation: "React Utvikler",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "Øyvind Wurschmidt",
        designation: "DotNet Utvikler",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "May-Desiree Øhman",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "Kjetil Christensen",
        designation: "Angular Utvikler",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Milla Sofie Ø.Christensen",
        designation: "API Utvikler",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Reidun Øhman",
        designation: "C++ Utvikler",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Stian Aslaksen",
        designation: "Python Utvikler",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Jim Kristensen",
        designation: "Vue Utvikler",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Anders Persson",
        designation: "Grafisk Designer",
        gender: "male",
        teamName: "TeamD"
      }]);

      useEffect(()=> {
        localStorage.setItem('employeeList', JSON.stringify(employees));
      },[employees]);

      useEffect(()=> {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
      },[selectedTeam]);

    
    function handleTeamSelectionChange (event) {
        setTeam(event.target.value)
    }

    function handleEmployeeCardClick(event){
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
    ?(employee.teamName === selectedTeam)? {...employee, teamName :''}:{...employee, teamName: selectedTeam}
                                            :employee);
    setEmployees(transformedEmployees)

    }

  return (
    <div>
      <Header     selectedTeam = {selectedTeam}
                  teamMemberCount = {employees.filter((employee)=> employee.teamName === selectedTeam).length}
                  />
      <Employees  employees = {employees}
                  selectedTeam = {selectedTeam}
                  handleEmployeeCardClick = {handleEmployeeCardClick}
                  handleTeamSelectionChange = {handleTeamSelectionChange}
                  />
      <Footer />
    </div>
  );
}

export default App;
