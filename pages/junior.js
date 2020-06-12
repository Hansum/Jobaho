import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import JobCardsLayout from "../components/JobsectionCards";
import fetch from "isomorphic-unfetch";
import NextLink from "next/link";
import Loader from "../components/LoadingLayout";
import JobCards from "../components/CardsLayout";
import {
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Link,
  Input,
} from "@chakra-ui/core";

const fetcher = async (...url) => {
  const res = await fetch(...url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error("error", data.message);
  }
  return data;
};

export default function FetchData(req, res) {
  const [value, setValue] = useState("");
  const { query } = useRouter();
  // const { data, error } = useSWR("/api/juniorAPI", fetcher);

  const { data, error } = useSWR(
    `/api/juniorAPI${query.title ? "?keyword=" + query.title : ""}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    Router.push({
      pathname: "/junior",
      query: { title: value },
    });
  };

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) {
    return <Loader>Scraping Junior Level Jobs</Loader>;
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
        <Flex justifyContent="center">
          <form onSubmit={handleSubmit}>
            <Input
              textAlign="center"
              type="text"
              size="lg"
              placeholder="Search job position.."
              value={value}
              onChange={(event) => setValue(event.target.value)}
            ></Input>
          </form>
        </Flex>

        {/*cards*/}
        <Flex flexWrap="wrap" justifyContent="center">
          {data.entry_level.map((res, index) => {
            const {
              Job_Position,
              Job_Company_Name,
              Job_Location,
              Job_url,
            } = res;
            return (
              <JobCards
                index={index}
                title={Job_Position}
                company={Job_Company_Name}
                location={Job_Location}
                url={Job_url}
              ></JobCards>
            );
          })}
        </Flex>
      </Box>
    </JobCardsLayout>
  );
}
