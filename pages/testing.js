import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
// import "../node_modules/bulma/css/bulma.css";

export default class extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseUrl}/api/jobPosition`);
    const data = await res.json();
    return { positionResult: data.data };
  }

  jobCards() {
    return (
      <div className="centered">
        <section className="cards">
          <article className="job-card">
            <h1>{this.props.positionResult.mynimo.positions[2]}</h1>
            <h2>Company: {this.props.positionResult.mynimo.companyName[2]}</h2>
          </article>
          <article className="job-card">
            <h1>{this.props.positionResult.mynimo.positions[3]}</h1>
            <h2>Company: {this.props.positionResult.mynimo.companyName[3]}</h2>
          </article>
          <article className="job-card">
            <h1>{this.props.positionResult.mynimo.positions[10]}</h1>
            <h2>Company: {this.props.positionResult.mynimo.companyName[10]}</h2>
          </article>
          <article className="job-card">
            <h1>{this.props.positionResult.mynimo.positions[15]}</h1>
            <h2>Company: {this.props.positionResult.mynimo.companyName[15]}</h2>
          </article>
        </section>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1>job Section</h1>
          {this.jobCards()}
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";

// class TestingPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

//   fetchData() {
//     axios
//       .get("/api/test")
//       .then(data => data.json())
//       .then(res => this.setState({ data: res.data }))
//       .catch(err => console.log("error", err));
//   }

//   renderData() {
//     const { data } = this.state;
//     return <h1>{data}</h1>;
//   }

//   render() {
//     return (
//       <div>
//         <h1>TEST ONLY</h1>
//         {this.renderData()}
//       </div>
//     );
//   }
// }

// export default TestingPage;
