import styled from "styled-components";
import { useState } from "react";
import { request } from "graphql-request";
import useSWR from "swr";

import Masonry from "../components/masonry";

const fetcher = (query) =>
  request(
    "https://api-us-west-2.graphcms.com/v2/ckkyjl7i66vht01yw763t4j63/master",
    query
  );

export async function getStaticProps() {
  const data = await fetcher(`
  {
    assets {
      id
      url(transformation: { image: { resize: { width: 1400 } } })
    }
  }
`);
  return {
    props: {
      data,
    },
  };
}

export default function Gallery(props) {
  const { data, error } = useSWR(
    `
      {
        assets {
          id
          url(transformation: { image: { resize: { width: 1400 } } })
        }
      }
    `,
    fetcher,
    { initialData: props.data }
  );
  return (
    <StyledContent>
      <StyledHero>
        <h1>Gallery</h1>
      </StyledHero>
      <Masonry data={data} error={error} />
    </StyledContent>
  );
}

const StyledContent = styled.div`
  width: 100%;
`;

const StyledHero = styled.div`
  background-image: url("images/676A7843.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 16px);

  h1 {
    font-size: 120px;
    margin-bottom: 96px;
    letter-spacing: 20px;

    @media (max-width: 804px) {
      font-size: 80px;
    }

    @media (max-width: 415px) {
      font-size: 50px;
    }
  }
`;
