import { Link } from "react-router-dom";


function Home() {
    
    return (
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpXb7uZkF53D-Lqe14FmLcFSI1jTHlkSCDwuZ8zN1xVmvIC2JTUsVbRn8n5tdSaKK-jM&usqp=CAU" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Permis de Conduire</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/quiz" className="btn btn-dark btn-lg px-4 me-md-2">Get started</Link>
              <Link to="/login" className="btn btn-outline-secondary btn-lg px-4">Go to dashboard</Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  } 
  
  export default Home;