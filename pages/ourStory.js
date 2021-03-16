import styled from "styled-components";
import Image from "next/image";

import Story from "../docs/ourStory.mdx";

export default function OurStory() {
  return (
    <>
      <StyledHero>
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="/images/676A6915.jpg"
        ></Image>
      </StyledHero>
      <StyledTitle>our story</StyledTitle>
      <StyledContent>
        <StyledStoryWrapper>
          <Story />
        </StyledStoryWrapper>
      </StyledContent>
    </>
  );
}

const StyledHero = styled.div`
  border-bottom-right-radius: 50px;
  height: 100vh;

  @media (max-width: 964px) {
    height: calc(100vh + 16px);
    width: 100%;
    border-bottom-right-radius: 0px;
    object-fit: cover;
    object-position: 0% 25%;
  }
`;

const StyledTitle = styled.h1`
  position: absolute;
  font-size: 72px;
  top: 341px;
  right: -172px;
  transform: rotate(90deg);
  letter-spacing: 15px;

  @media (max-width: 614px) {
    color: #fff1e6;
  }
`;

const StyledStoryWrapper = styled.div`
  width: 50%;
  margin-top: 96px;
  margin-bottom: 48px;

  @media (max-width: 604px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
`;
