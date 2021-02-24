import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Info>
        <TitleWrapper>
          <Date>join us may 17th, 2021</Date>
          <Grid>
            <h1>time</h1>
            <h1>location</h1>
            <h1>itinerary</h1>
          </Grid>
        </TitleWrapper>
        <InfoWrapper>
          <GridInfo>
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
          </GridInfo>
        </InfoWrapper>
        <MobileWrapper>
          <GridInfo>
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
          </GridInfo>
        </MobileWrapper>
      </Info>
    </>
  );
}

const Hero = styled.div`
  height: calc(100vh - 32px);
  background-image: url("/images/IMG_4295.JPG");
  background-size: cover;
  background-position: 50% 80%;
  background-repeat: no-repeat;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  width: 100%;

  @media (max-width: 1098px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 804px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-48px);
  z-index: 101;
  background-color: #fff1e6;
  border-top-right-radius: 50px;
  height: calc(100% + 48px);

  @media (max-width: 804px) {
    display: none;
  }
`;

const Date = styled.h3`
  position: absolute;
  top: 32px;
  left: 48px;
`;

const Grid = styled.div`
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

const GridInfo = styled(Grid)`
  margin-top: 96px;
  justify-content: start;
  text-align: left;
  padding: 0 0 0 48px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eddcd2;

  @media (max-width: 804px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff1e6;
  margin-bottom: 48px;

  @media (min-width: 804px) {
    display: none;
  }
`;
