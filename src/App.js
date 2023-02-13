
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import {useState} from 'react';

function App() {
  
  const[selectedTeam,setTeam] = useState("Team B");

    const [employees,setEmployees] = useState([{
        id: 1,
        fullName: "Ben Øhman",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Tone Merete Christensen",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Andrea Sommerseth",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Jarl Opedal",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "Øyvind Wurschmidt",
        designation: "DotNet Developer",
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
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Milla Sofie Ø.Christensen",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Reidun Øhman",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Stian Aslaksen",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Jim Kristensen",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Anders Persson",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);
    
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
      <Header />
      <Employees employees = {employees}
                  selectedTeam = {selectedTeam}
                  handleEmployeeCardClick = {handleEmployeeCardClick}
                  handleTeamSelectionChange = {handleTeamSelectionChange}
                  />
      <Footer />
    </div>
  );
}

export default App;
