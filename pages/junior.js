import useSWR from "swr";
import JobCardsLayout from "../components/JobsectionCards";
import fetch from "isomorphic-unfetch";
import NextLink from "next/link";
import Loader from "../components/LoadingLayout";
import { Box, Flex, Text, Button, ButtonGroup, Link } from "@chakra-ui/core";

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

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) {
    return (
      <Loader>
        <Text>Scraping Junior Level Jobs </Text>
      </Loader>
    );
  }

  //BOX ----> DIV
  return (
    <JobCardsLayout>
      <Box>
        <Box p={3} textAlign="center">
          <Text
            color="white"
            textAlign="center"
            fontSize="40px"
            fontFamily="Sen"
          >
            Junior / Entry Level Jobs
          </Text>
        </Box>

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
