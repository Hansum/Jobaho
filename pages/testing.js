// import fetch from "isomorphic-unfetch";

// function test({ testData }) {
//   return <div>SAMPLE DATA FROM nNode: {testData}</div>;
// }

// test.getInitialProps = async ctx => {
//   const res = await fetch("http://localhost:3000/testNode");
//   const json = await res.json();
//   return { testData: json.data };
// };

// export default test;
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseUrl}/api/test`);
    const data = await res.json();
    return { message: data.message };
  }

  render() {
    return <h1>Hello: {this.props.message}</h1>;
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
