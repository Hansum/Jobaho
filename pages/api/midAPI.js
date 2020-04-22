import MidJobData from "../../data/midData";

export default async (req, res) => {
  const data = [];
  const { keyword } = req.query;
  const retval = await MidJobData();

  if (keyword) {
    for (let item of retval.mid_level) {
      const exists = item.title.toLowerCase().includes(keyword);

      if (exists) {
        data.push(item);
      }
    }

    res.status(200).json({ mid_level: data, length: data.length });
  }
  res.status(200).json(retval);
};
