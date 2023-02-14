const Footer = () => {

    let today = new Date();

    return (
      <footer class ='container'>
        <div class ='row justify-content-center mt-3 mb-5 bg-info text-white'>
            <div col-8>
                <h4>GruppeFordelingsApp -{today.getUTCFullYear()}</h4>
            </div>
      </div>
      </footer>
    )
  }
  
  export default Footer;
  