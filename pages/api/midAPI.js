import MidJobData from "../../data/midData";

export default async (req, res) => {
  const retval = await MidJobData();

  if (retval) {
    res.status(200).json(retval);
  }
};
