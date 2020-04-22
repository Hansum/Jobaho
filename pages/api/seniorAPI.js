import SeniorJobData from "../../data/seniorData";

export default async (req, res) => {
  const data = [];
  const { keyword } = req.query;
  const retval = await SeniorJobData();

  if (keyword) {
    for (let item of retval) {
      const exists = item.title.toLowerCase().includes(keyword);

      if (exists) {
        data.push(item);
      }
    }

    res.status(200).json(data);
  }

  res.status(200).json(retval);
};
