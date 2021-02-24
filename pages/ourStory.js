import styled from "styled-components";
import Story from "../docs/ourStory.mdx";

export default function OurStory() {
  return (
    <>
      <Hero src="/images/676A6915.jpg"></Hero>
      <Title>our story</Title>
      <Content>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </Content>
    </>
  );
}

const Hero = styled.img`
  width: 50%;
  border-bottom-right-radius: 50px;

  @media (max-width: 964px) {
    height: calc(100vh + 16px);
    width: 100%;
    border-bottom-right-radius: 0px;
    object-fit: cover;
    object-position: 0% 25%;
  }
`;

const Title = styled.h1`
  position: absolute;
  font-size: 72px;
  top: 341px;
  right: -172px;
  transform: rotate(90deg);
  letter-spacing: 15px;

  @media (max-width: 964px) {
    color: #fff1e6;
  }
`;

const StoryWrapper = styled.div`
  width: 50%;
  margin-top: 48px;
  margin-bottom: 48px;

  @media (max-width: 604px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
`;
