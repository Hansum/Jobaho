import JuniorJobData from "../../data/juniorData";

export default async (req, res) => {
  const data = [];
  const { keyword } = req.query; // Keyword is case sensitive
  const retval = await JuniorJobData();

  if (keyword) {
    for (let item of retval.entry_level) {
      const exists = item.Job_Position.toLowerCase().includes(
        keyword.toLowerCase()
      );

      if (exists) {
        data.push(item);
      }
    }

    res.status(200).json({ entry_level: data, length: data.length });
  } else {
    res.status(200).json(retval);
  }
};
