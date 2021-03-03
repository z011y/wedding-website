import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLinksWrapper>
        <Link href="/ourStory">
          <a>our story</a>
        </Link>
        <Link href="/gallery">
          <a>gallery</a>
        </Link>
        <Link href="/registry">
          <a>registry</a>
        </Link>
        <Link href="/rsvp">
          <a>rsvp</a>
        </Link>
      </StyledLinksWrapper>
      <StyledLogo>
        <h3>
          cameron
          <br /> and
          <br /> nicole
        </h3>
      </StyledLogo>
      <StyledAddress>
        the white shanty <br /> 502 S 300 W <br /> Provo, UT 84601
      </StyledAddress>
      <StyledLine></StyledLine>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
  background-color: #fff1e6;

  @media (max-width: 604px) {
    height: 750px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 146px;
  width: 160px;
  background-color: #ddbea9;
  color: #fff;
  border-radius: 8px;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 604px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
    margin-bottom: 48px;
    width: 100%;
  }
`;

const StyledAddress = styled.h3`
  text-align: center;
  font-size: 14px;
`;

const StyledLine = styled.div`
  height: 18px;
  width: 100%;
  border-radius: 8px;
  background-color: #ddbea9;
`;
