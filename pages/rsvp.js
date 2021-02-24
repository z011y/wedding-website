import styled from "styled-components";

import Form from "../components/form";

export default function RSVP() {
  return (
    <Content>
      <FormWrapper>
        <MobileTitle>RSVP</MobileTitle>
        <Form />
      </FormWrapper>
      <Hero>
        <Title>RSVP</Title>
      </Hero>
    </Content>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: calc(100vh + 16px);

  @media (max-width: 1098px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 804px) {
    grid-template-columns: 1fr;
  }
`;

const Hero = styled.div`
  background-image: url("images/IMG_4300.JPG");
  background-position: 100% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1098px) {
    background-position: 75% 50%;
  }

  @media (max-width: 944px) {
    background-position: 65% 50%;
  }

  @media (max-width: 804px) {
    display: none;
  }
`;

const Title = styled.h1`
  position: absolute;
  font-size: 250px;
  letter-spacing: 40px;
  color: #fff1e6;

  @media (max-width: 1098px) {
    font-size: 175px;
    letter-spacing: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 944px) {
    font-size: 150px;
    letter-spacing: 10px;
    margin-bottom: 12px;
  }
`;

const MobileTitle = styled.h1`
  position: absolute;
  top: 96px;
  font-size: 125px;
  color: #fff1e6;

  @media (min-width: 804px) {
    display: none;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddbea9;
  justify-content: center;
  align-items: center;
  padding: 48px;
`;
