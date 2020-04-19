import JuniorJobData from "../../data/juniorData";

export default async (req, res) => {
  const entry_level = [];
  const { keyword } = req.query; // Keyword is case sensitive
  const retval = await JuniorJobData();

  if (keyword) {
    for (let item of retval.entry_level) {
      const exists = item.Job_Position.includes(keyword);

      if (exists) {
        entry_level.push(item);
      }
    }
    console.log("array value", entry_level);
    const length = entry_level.length;
    const result = { entry_level, length };
    res.status(200).json(result);
  } else {
    res.status(200).json(retval);
  }
};
