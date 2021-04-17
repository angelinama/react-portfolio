import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    return (
      <div class="container-md">
        <div class="row mx-0">
          <div class="col-12 col-md-8 border bg-white py-4">
            <div class="page-header border-bottom">
              <h1 class="h1 text-info">Contact</h1>
            </div>
            <div class="row mt-3">
              <form class="col text-muted">
                <div class="form-group">
                  <label for="exampleInputName1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName1"
                    placeholder="John Smith"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="example@google.com"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
            <div class="row mt-3">
              <div class="col text-muted">
                <p>
                  <FontAwesomeIcon icon="envelope" />: angelina890308@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon="mobile-alt" />: 607-793-7301
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
