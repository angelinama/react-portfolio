import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function About() {
  return (
    <div>
      <div className="container-md">
        <div className="row mx-0">
          <div className="col-12 col-md-8 border bg-white py-4">
            <div className="page-header border-bottom">
              <h1 className="h1 text-info">About Me</h1>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <img
                  src="./images/Angelina_Horizotal.jpg"
                  alt="Angelina travel pic"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <p>
                  My name is Angelina Ma (Chinese: 马冰清). Currently, I am
                  working as a software engineer at Amazon. I live in Seattle,
                  WA. Before moving to Seattle, I had quite a journey.
                </p>
                <p>
                  I came to the States in Aug 2015. I went to Cornell University
                  and graduated in May 2018 with masters in Chemical Engineering
                  and Computer Science. After my graduation, at first, I lived
                  in SF Bay Area and worked for start-up called Lime.
                </p>
                <p>
                  Outside of work, I enjoy travelling, live music, hiking,
                  kayaking and I am a proud German Shepherd mom. The current
                  pandemic really affects me to go out and about though. If you
                  want to know me more, please use the contact link to leave a
                  message.
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 border-bottom">
                <h1 className="h1 text-info">Experience</h1>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p>
                  Please check my public projects outside out job on my{" "}
                  <a href="https://github.com/angelinama">
                    <i className="fa fa-github"></i> Github
                  </a>{" "}
                  and{" "}
                  <a href="https://www.linkedin.com/in/bingqing-ma-4818a7132/">
                    <i className="fa fa-linkedin-square"></i> LinkedIn
                  </a>
                  .
                </p>
                <p>Download my resume</p>
                <a
                  className="h1"
                  href="Assets/Resume/March-2021-fullstack.docx.pdf"
                  download
                >
                  <i className="fa fa-file"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
