import JuniorJobData from "../../data/juniorData";

export default async (req, res) => {
  const retval = await JuniorJobData();

  res.status(200).json(retval);
};
