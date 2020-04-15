import SeniorJobData from "../../data/seniorData";

export default async (req, res) => {
  const retval = await SeniorJobData();

  res.status(200).json(retval);
};
