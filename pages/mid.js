import React, { Component } from "react";
import { useRouter } from "next/router";
import JobCardsLayout from "../components/JobsectionCards";
import fetch from "isomorphic-unfetch";
import ErrorPage from "next/error";
import { Box, Flex, Link, Text, Button, ButtonGroup } from "@chakra-ui/core";

const jobPage = ({ result }) => {
  if (!result) {
    console.log("Data loading");
    return <div>Loading...</div>;
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
          Mid Level Jobs
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {result.data.mid_level.map((res, index) => {
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
};

export async function getServerSideProps({ req }) {
  try {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseUrl}/api/MidPosition`);
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

export default jobPage;
