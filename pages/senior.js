import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import JobCardsLayout from "../components/JobsectionCards";
import { Box, Flex, Link, Text, Button, ButtonGroup } from "@chakra-ui/core";

const SeniorPage = ({ result }) => {
  if (!result) {
    console.log("No data from the senior result");
  }

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
        <Flex flexWrap="wrap" justifyContent="center">
          {result.data.senior_level.map((res, index) => {
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
};

export async function getServerSideProps({ req }) {
  try {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseUrl}/api/SeniorPosition`);
    const result = await res.json();

    return {
      props: { result },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}

export default SeniorPage;
