import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="container-md">
        <div className="row mx-0">
          <div className="col-12 col-md-8 border bg-white py-4">
            <div className="page-header border-bottom">
              <h1 className="h1 text-info">Portfolio</h1>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src="./images/whats-for-dinner.png"
                    alt="what's for dinner website screenshot"
                    className="card-img"
                  />
                  {/* <div className="card-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">What's for dinner</h5>
                  </div> */}
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/benrgross/Whats-For-Dinner">
                    <i className="fa fa-github"></i> git
                  </a>
                  <a href="https://benrgross.github.io/Whats-For-Dinner/">
                    <i className="fa fa-link"></i>deploy
                  </a>
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src="./images/weather-dashboard.png"
                    alt="Weather Dashboard website screenshot"
                    className="card-img"
                  />
                  <div className="card-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Weather Dashboard</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/weather-dashboard">
                    <i className="fa fa-github"></i>{" "}
                  </a>
                  <a href="https://angelinama.github.io/weather-dashboard/">
                    <i className="fa fa-link"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src="./images/burger.png"
                    alt="burger app screenshot"
                    className="card-img"
                  />
                  <div className="card-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Eat da burger</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/Eat-da-burger">
                    <i className="fa fa-github"></i>{" "}
                  </a>
                  <a href="https://eat-da-burger-angelina.herokuapp.com/">
                    <i className="fa fa-link"></i>
                  </a>
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src="./images/wineLog.jpg"
                    alt="place holder"
                    className="card-img"
                  />
                  <div className="card-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Wine Log</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/wine-log">
                    <i className="fa fa-github"></i>{" "}
                  </a>
                  <a href="https://project2-women-power.herokuapp.com/">
                    <i className="fa fa-link"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src="http://placehold.it/150x150"
                    alt="place holder"
                    className="card-img"
                  />
                  <div className="card-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Rock Paper Scissors</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/benrgross/Whats-For-Dinner">
                    <i className="fa fa-github"></i>{" "}
                  </a>
                  <a href="https://benrgross.github.io/Whats-For-Dinner/">
                    <i className="fa fa-link"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
