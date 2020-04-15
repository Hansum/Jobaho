import useSWR from "swr";
import JobCardsLayout from "../components/JobsectionCards";
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
  const { data, error } = useSWR("/api/juniorAPI", fetcher);
  // console.log("Data:", data);

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) return <div>Loading...</div>;

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
          Junior / Entry Level Jobs
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {data.entry_level.map((res, index) => {
            const {
              Job_Position,
              Job_Company_Name,
              Job_Location,
              Job_url,
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
                    {Job_Company_Name}
                  </Box>
                </Box>
                <Box
                  mt="2"
                  fontWeight="semibold"
                  fontSize="lg"
                  textAlign="center"
                  color="blue.600"
                >
                  <Link href={Job_url} isExternal>
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
