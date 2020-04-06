const axios = require("axios");

exports.fetchAPI = async () => {
  const arr = [];
  const api =
    "https://indreed.herokuapp.com/api/jobs?q=Software%20Developer&l=Cebu&country=ph";
  return await axios
    .get(api)
    .then((res) => {
      //   for (let item of res.data) {
      //     if (item != undefined) {
      //       arr.push({
      //         Job_Position: item.title,
      //         Job_Url: item.url,
      //         Company_Name: item.company,
      //         Location: item.location,
      //       });
      //     }
      //   }
      //   console.log("array:", arr);
      return res.data;
    })
    .catch((err) => {
      console.log("error fetching in indreed API");
    });
};

// const filterData = async () => {
//     const retval = await fetchAPI();
// }
