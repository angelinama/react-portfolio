import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFileDownload,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fab, faFileDownload, faExternalLinkAlt);
  return (
    <HashRouter basename="/">
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Angelina's portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Wrapper className="my-4">
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
