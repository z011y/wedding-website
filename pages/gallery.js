import styled from "styled-components";
import { useState } from "react";

import Masonry from "../components/masonry";

export default function Gallery() {
  return (
    <Content>
      <Hero>
        <h1>Gallery</h1>
      </Hero>
      <Masonry />
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
`;

const Hero = styled.div`
  background-image: url("images/IMG_4296.JPG");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 16px);

  h1 {
    font-size: 120px;
    margin-bottom: 96px;

    @media (max-width: 804px) {
      font-size: 80px;
    }
  }
`;
