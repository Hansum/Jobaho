import React from "react";
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
  const { data, error } = useSWR("/api/seniorAPI", fetcher);
  // console.log("Data:", data);

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) {
    return <Loader>Scraping Senior Level Jobs</Loader>;
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
          Senior Level Jobs
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
          {data.map((res, index) => {
            const { title, company, location, url } = res;
            return (
              <JobCards
                title={title}
                company={company}
                location={location}
                url={url}
                index={index}
              ></JobCards>
            );
          })}
        </Flex>
      </Box>
    </JobCardsLayout>
  );
}
