const Header = ({selectedTeam,teamMemberCount}) => {
  return (
    <header class = 'container'>
      <div class ='row justify-content-center mt-3 mb-5 bg-info text-white'>
        <div col-8>
            <h1>Fordeling av gruppemedlemmer:</h1>
            <h3>{selectedTeam} har {teamMemberCount} medlemmer.</h3>
        </div>
      </div>
    </header>
  )
}

export default Header;
