import {useState} from 'react';
import silhouetteMan  from './images/silhouetteMan.jpg';
import silhouetteWoman  from './images/silhouetteWoman.jpg';



const Employees = () => {

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
    
    function handleTeamSelectionChage (event) {
        setTeam(event.target.value)
    }

    function handleEmployeeCardClick(event){
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
    ?(employee.teamName === selectedTeam)? {...employee, teamName :''}:{...employee, teamName: selectedTeam}
                                            :employee);
    setEmployees(transformedEmployees)

    }

    return (
      <main className ="container">
        <div class="row justify-content-center mt-3 mb-3">
            <div class="col-6">
                <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChage}>
                    <option value="Team A">Gruppe A</option>
                    <option value="Team B">Gruppe B</option>
                    <option value="Team C">Gruppe C</option>
                    <option value="Team D">Gruppe D</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-center mt-3 mb-3">
            <div class="col-8">
                <div class="card-collection">
                    {
                        employees.map((employee) => (
                            <div id = {employee.id} className={(employee.teamName === selectedTeam ?'card m-3 stand-out' : 'card m-3')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
                                {(employee.gender === "male")?<img src={silhouetteMan} className ='card-img-top'/>
                                                            :<img src={silhouetteWoman} className ='card-img-top'/> }
                                <div className='card-body'>
                                    <h5 className='card-title'>Navn: {employee.fullName}</h5>
                                    <p className='card-text'><b>Yrke: </b> {employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </main>
    )
  }
  
  export default Employees;
  