import MidJobData from "../../data/midData";

export default async (req, res) => {
  const retval = await MidJobData();

  res.status(200).json(retval);
};
