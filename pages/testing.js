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
    return this.props.positionResult.mynimo.jobResult.jobData.map(
      (res, index) => {
        const { Job_Position, Job_Company_Name, Job_Location } = res;
        return (
          <article className="job-card" key={index}>
            <h1>{Job_Position}</h1>
            <h2>{Job_Company_Name}</h2>
            <h2>{Job_Location}</h2>
          </article>
        );
      }
    );
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
