import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
// import "../node_modules/bulma/css/bulma.css";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseUrl}/api/jobPosition`);
    const data = await res.json();
    return { positionResult: data.data };
  }

  jobCards() {
    return this.props.positionResult.entry_level.map((res, index) => {
      const { Job_Position, Job_Company_Name, Job_Location, Job_url } = res;
      return (
        <article className="job-card" key={index}>
          <h1>{Job_Position}</h1>
          <h2>{Job_Company_Name}</h2>
          <h2>{Job_Location}</h2>
          <h2>{Job_url}</h2>
        </article>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>job Section</h1>
          <div className="centered">
            <section className="cards">{this.jobCards()}</section>
          </div>
        </div>
      </div>
    );
  }
}
