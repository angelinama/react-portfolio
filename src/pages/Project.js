import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    src={
                      process.env.PUBLIC_URL + "/images/whats-for-dinner.png"
                    }
                    alt="what's for dinner website screenshot"
                    className="card-img"
                  />
                  <div className="mycard-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">What's for dinner</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/benrgross/Whats-For-Dinner">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>{" "}
                  <a href="https://benrgross.github.io/Whats-For-Dinner/">
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/weather-dashboard.png"
                    }
                    alt="Weather Dashboard website screenshot"
                    className="card-img"
                  />
                  <div className="mycard-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Weather Dashboard</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/weather-dashboard">
                    <FontAwesomeIcon icon={["fab", "github"]} />{" "}
                  </a>
                  <a href="https://angelinama.github.io/weather-dashboard/">
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src={process.env.PUBLIC_URL + "/images/burger.png"}
                    alt="burger app screenshot"
                    className="card-img"
                  />
                  <div className="mycard-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Eat da burger</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/Eat-da-burger">
                    <FontAwesomeIcon icon={["fab", "github"]} />{" "}
                  </a>
                  <a href="https://eat-da-burger-angelina.herokuapp.com/">
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <img
                    src={process.env.PUBLIC_URL + "/images/wineLog.jpg"}
                    alt="place holder"
                    className="card-img"
                  />
                  <div className="mycard-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Wine Log</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/angelinama/wine-log">
                    <FontAwesomeIcon icon={["fab", "github"]} />{" "}
                  </a>
                  <a href="https://project2-women-power.herokuapp.com/">
                    <FontAwesomeIcon icon="external-link-alt" />
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
                  <div className="mycard-img-overlay bg-info text-white text-center">
                    <h5 className="card-title">Rock Paper Scissors</h5>
                  </div>
                </div>
                <h6 className="text-muted text-center">
                  Links:
                  <a href="https://github.com/benrgross/Whats-For-Dinner">
                    <FontAwesomeIcon icon={["fab", "github"]} />{" "}
                  </a>
                  <a href="https://benrgross.github.io/Whats-For-Dinner/">
                    <FontAwesomeIcon icon="external-link-alt" />
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
