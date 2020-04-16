import useSWR from "swr";
import JobCardsLayout from "../components/JobsectionCards";
import Loader from "../components/LoadingLayout";
import fetch from "isomorphic-unfetch";

import { Box, Flex, Link, Text, Button, ButtonGroup } from "@chakra-ui/core";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error("error", data.message);
  }
  return data;
};

export default function FetchData() {
  const { data, error } = useSWR("/api/midAPI", fetcher);
  // console.log("Data:", data);

  if (error) return <div>Failed to load mid api</div>;
  if (!data) {
    return (
      <Loader>
        <Text>Scraping Mid Level Jobs </Text>
      </Loader>
    );
  }

  //BOX ----> DIV
  return (
    <JobCardsLayout>
      <Box>
        <Text
          color="white"
          m={5}
          textAlign="center"
          fontSize="30px"
          fontFamily="Sen"
        >
          Mid Level Jobs
        </Text>
        <Text
          color="white"
          m={5}
          textAlign="center"
          fontSize="20px"
          fontFamily="Sen"
        >
          Number of Jobs: {data.length}
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {data.mid_level.map((res, index) => {
            const {
              Job_Position,
              Company_Name,
              Job_Location,
              Job_Date,
              Job_Url,
            } = res;
            return (
              <Box
                m={3}
                borderWidth="1px"
                bg="white"
                flex="0 1 24%"
                p={6}
                rounded="lg"
                mt={5}
                key={index}
              >
                <Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    textTransform="uppercase"
                    fontSize="xs"
                    textAlign="center"
                  >
                    {Company_Name}
                  </Box>
                </Box>
                <Box
                  mt="2"
                  fontWeight="semibold"
                  fontSize="lg"
                  textAlign="center"
                  color="blue.600"
                >
                  <Link href={Job_Url} isExternal>
                    {Job_Position}
                  </Link>
                </Box>
                <Box mt="2" color="gray.600" fontSize="sm" textAlign="center">
                  {Job_Location}
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </JobCardsLayout>
  );
}
