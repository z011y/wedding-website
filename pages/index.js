import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <StyledHero></StyledHero>
      <StyledInfo>
        <StyledTitleWrapper>
          <StyledDate>join us may 17th, 2021</StyledDate>
          <StyledGrid>
            <h1>time</h1>
            <h1>location</h1>
            <h1>itinerary</h1>
          </StyledGrid>
        </StyledTitleWrapper>
        <StyledInfoWrapper>
          <StyledGridInfo>
            <h3>
              Monday <br />
              May 17th, 2021 <br />
              5:00 pm-9:30 pm
            </h3>
            <h3>
              the white shanty <br /> 502 S 300 W <br /> Provo, UT 84601
            </h3>
            <h3>
              Wedding Ceremony <br /> Reception <br /> Wood-fired pizzas
            </h3>
          </StyledGridInfo>
        </StyledInfoWrapper>
        <StyledMobileWrapper>
          <StyledDate>join us may 17th, 2021</StyledDate>
          <StyledGridInfo>
            <h1>time</h1>
            <h3>
              Monday <br />
              May 17th, 2021 <br />
              5:00 pm-9:30 pm
            </h3>
            <h1>location</h1>
            <h3>
              the white shanty <br /> 502 S 300 W <br /> Provo, UT 84601
            </h3>
            <h1>itinerary</h1>
            <h3>
              Wedding Ceremony <br /> Reception <br /> Wood-fired pizzas
            </h3>
          </StyledGridInfo>
        </StyledMobileWrapper>
      </StyledInfo>
    </>
  );
}

const StyledHero = styled.div`
  height: calc(100vh - 32px);
  background-image: url("/images/676A7611.jpg");
  background-size: cover;
  background-position: 50% 60%;
  background-repeat: no-repeat;
`;

const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: calc(100vh + 48px);
  width: 100%;
  padding-bottom: 48px;

  @media (max-width: 1098px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 804px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-48px);
  z-index: 1;
  background-color: #fff1e6;
  border-top-right-radius: 50px;
  height: calc(100% + 48px);

  @media (max-width: 804px) {
    display: none;
  }
`;

const StyledDate = styled.h3`
  position: absolute;
  top: 32px;
  left: 48px;

  @media (max-width: 804px) {
    position: relative;
    transform: translateY(-24px);
  }
`;

const StyledGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 144px;
  justify-content: end;
  align-items: start;
  text-align: right;
  padding-right: 48px;

  @media (max-width: 804px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }
`;

const StyledGridInfo = styled(StyledGrid)`
  margin-top: 96px;
  justify-content: start;
  text-align: left;
  padding: 0 0 0 48px;

  @media (max-width: 804px) {
    margin-bottom: 48px;
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 36px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eddcd2;

  @media (max-width: 804px) {
    display: none;
  }
`;

const StyledMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eddcd2;
  margin-bottom: 48px;

  @media (min-width: 804px) {
    display: none;
  }
`;
