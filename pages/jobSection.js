import React, { Component } from "react";
import useSWR from "swr";
import JobCardsLayout from "../components/JobsectionCards";
import ArticleLayout from "../components/ArticleLayout";
import fetch from "isomorphic-unfetch";
import ErrorPage from "next/error";
import { Box, Flex } from "@chakra-ui/core";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error("error", data.message);
  }
  return data;
};

export default function FetchData() {
  const { data, error } = useSWR("/api/job/index", fetcher);
  console.log("Data:", data);

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) return <div>Loading...</div>;

  // return data.map((res, index) => {
  //   const { job_position, company, location, url } = res;
  //   return (
  //     <ArticleLayout uniqueKey={index}>
  //       <h1>{job_position}</h1>
  //       <h2>{company}</h2>
  //       <h2>{location}</h2>
  //     </ArticleLayout>
  //   );
  // });

  // Sample card from Airbnb

  return (
    <Flex flexWrap="wrap">
      {data.map((res, index) => {
        const { job_position, company, location, url } = res;
        return (
          <Box maxW="md" m={5} borderWidth="1px" rounded="lg" bg="white">
            <Box p="8">
              <Box d="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  flexWrap="wrap"
                >
                  {company}
                </Box>
              </Box>

              <Box d="flex" alignItems="baseline">
                <Box
                  flexWrap="wrap"
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                >
                  {job_position}
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" color="gray.600" fontSize="sm">
                  {location}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}

// const SampleLayout = ({ children, title }) => {
//   return (
//     <div className="centered">
//       <h1>{title}</h1>
//       <section className="card">{children}</section>
//     </div>
//   );
// };

// const jobPage = ({ result }) => {
//   if (!result) {
//     // return <ErrorPage statusCode={404}></ErrorPage>;
//     console.log("Data not found");
//   }

//   // return result.data.entry_level.map((res, index) => {
//   //   const { Job_Position, Job_Company_Name, Job_Location, Job_url } = res;
//   //   return (
//   //     <ArticleLayout uniqueKey={index}>
//   //       <h1>{Job_Position}</h1>
//   //       <h2>{Job_Company_Name}</h2>
//   //       <h2>{Job_Location}</h2>
//   //     </ArticleLayout>
//   //   );
//   // });

//   return (
//     <SampleLayout>
//       {result.data.entry_level.map((res, index) => {
//         const { Job_Position, Job_Company_Name, Job_Location, Job_url } = res;
//         <ArticleLayout uniqueKey={index}>
//           <h1>{Job_Position}</h1>
//           <h2>{Job_Company_Name}</h2>
//           <h2>{Job_Location}</h2>
//         </ArticleLayout>;
//       })}
//     </SampleLayout>
//   );
// };

// export async function getServerSideProps({ req }) {
//   try {
//     const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
//     const res = await fetch(`${baseUrl}/api/jobPosition`);
//     const result = await res.json();

//     return {
//       props: { result },
//     };
//   } catch {
//     res.statusCode = 404;
//     return {
//       props: {},
//     };
//   }
// }

// export default jobPage;
