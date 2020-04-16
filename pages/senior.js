import React from "react";
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
  const { data, error } = useSWR("/api/seniorAPI", fetcher);
  // console.log("Data:", data);

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) {
    return (
      <Loader>
        <Text>Scraping Senior Level Jobs </Text>
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
                    {company}
                  </Box>
                </Box>
                <Box
                  mt="2"
                  fontWeight="semibold"
                  fontSize="lg"
                  textAlign="center"
                  color="blue.600"
                >
                  <Link href={url} isExternal>
                    {title}
                  </Link>
                </Box>
                <Box mt="2" color="gray.600" fontSize="sm" textAlign="center">
                  {location}
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </JobCardsLayout>
  );
}
