import useSWR from "swr";
import JobCardsLayout from "../components/JobsectionCards";
import Loader from "../components/LoadingLayout";
import fetch from "isomorphic-unfetch";
import JobCards from "../components/CardsLayout";
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
    return <Loader>Scraping Mid Level Jobs</Loader>;
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
            const { title, company, location, url } = res;
            return (
              <JobCards
                title={title}
                company={company}
                location={location}
                url={url}
              ></JobCards>
            );
          })}
        </Flex>
      </Box>
    </JobCardsLayout>
  );
}
