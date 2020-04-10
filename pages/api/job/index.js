import combineData from "../../../entry";

export default async (req, res) => {
  const retval = await combineData();

  res.status(200).json(retval);
};
