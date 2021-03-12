import styled from "styled-components";
import { useState } from "react";

import Masonry from "../components/masonry";

export default function Gallery() {
  return (
    <StyledContent>
      <StyledHero>
        <h1>Gallery</h1>
      </StyledHero>
      <Masonry />
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
