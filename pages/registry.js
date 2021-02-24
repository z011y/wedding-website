import styled from "styled-components";

export default function Registry() {
  return (
    <Content>
      <Title>Coming Soon...</Title>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: calc(100vh + 16px);
  background-image: url("images/IMG_4300.JPG");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 150px;
  letter-spacing: 40px;
  color: #fff1e6;

  @media (max-width: 804px) {
    font-size: 80px;
    letter-spacing: 20px;
  }

  @media (max-width: 514px) {
    font-size: 60px;
    letter-spacing: 10px;
  }
`;
