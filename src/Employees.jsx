import silhouetteMan  from './images/silhouetteMan.jpg';
import silhouetteWoman  from './images/silhouetteWoman.jpg';



const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

    

    return (
      <main className ="container">
        <div class="row justify-content-center mt-3 mb-3">
            <div class="col-6">
                <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
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
                            <div key={employee.id} id = {employee.id} className={(employee.teamName === selectedTeam ?'card m-3 stand-out' : 'card m-3')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
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
  