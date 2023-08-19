import React from "react";
import { Banner, Footer, Header, Row, Slider } from "../../components";
import requests from "../../services/requests";
import { useQueries } from "@tanstack/react-query";
import { apiClient } from "../../services/axios";

const Dashboard = () => {
  const fetchUrls = Object.values(requests);
  const results = useQueries({
    queries: fetchUrls?.map((fetchUrl) => ({
      queryKey: [fetchUrl],
      queryFn: async () => {
        const response = await apiClient({
          method: "GET",
          url: fetchUrl,
        });
        return response;
      },
      select: (data) => data?.data?.results,
    })),
  });

  return (
    <>
      <Header />
      <Banner />
      <Slider />
      {requests && Object.keys(requests)?.length > 0
        ? Object.keys(requests).map((key, index) => (
            <Row key={key} title={key} movies={results?.[index]} />
          ))
        : null}
      <Footer />
    </>
  );
};

export default Dashboard;
