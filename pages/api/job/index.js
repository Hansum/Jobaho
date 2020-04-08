import combineData from "../../../entry";

export default async (req, res) => {
  const retval = await combineData();

  return res.json({ result: retval });
};
