import styled from "styled-components";

export default function Registry() {
  return (
    <StyledContent>
      <StyledTitle>Coming Soon...</StyledTitle>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh + 16px);
  background-image: url("images/676A7611.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledTitle = styled.h1`
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
