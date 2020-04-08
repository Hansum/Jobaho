import React, { Component } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error("error", data.message);
  }
  return data;
};

export default function FetchData() {
  const { data, error } = useSWR("/api/job", fetcher);
  console.log("Data:", data);

  if (error) return <div>Failed to load entry level api</div>;
  if (!data) return <div>Loading...</div>;

  return data.map(res, (index) => {
    const { job_position, company, location, url } = res;
    return (
      <article className="job-card" key={index}>
        <h1>{job_position}</h1>
        <h2>{company}</h2>
        <h2>{location}</h2>
        <h2>{url}</h2>
      </article>
    );
  });
}
