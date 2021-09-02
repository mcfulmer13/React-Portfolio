import React from 'react'; 



function Portfolio () {  

    return (
       
    <div class="pusher">
        <div class="ui inverted vertical masthead center aligned segment">
          <div class="ui text container">
            <h1 class="ui inverted header">McKinley Fulmer's Portfolio Items</h1>
          </div>
        </div>
      <div class="album py-5 bg-dark">
       <div class="container bg-dark">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
              <div class="card-body">
                <p class="card-text"> Project: Password Generator</p>
                <p class="card-text"> Sole Contributor </p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="lead">
                    <a href="./Cons.html" class="btn btn-lg btn-secondary fw-bold border-white bg-blue">View Project</a>
                  </p>
                  <small class="text-muted">McKinley Fulmer</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <p class="card-text"> Project: Sweat Equity</p>
                <p class="card-text"> Contributer </p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="lead">
                    <a href="https://github.com/mcfulmer13/Brogrammers" class="btn btn-lg btn-secondary fw-bold border-white bg-blue">View Project</a>
                  </p>
                  <small class="text-muted">McKinley Fulmer</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <p class="card-text"> Project: The Clean Water Project</p>
                <p class="card-text"> Contributer </p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="lead">
                    <a href="https://github.com/mcfulmer13/Clean_water_project" class="btn btn-lg btn-secondary fw-bold border-white bg-blue">View Project</a>
                  </p>
                  <small class="text-muted">McKinley Fulmer</small>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>  
    </div>
    </div>






    );
  }

export default Portfolio;