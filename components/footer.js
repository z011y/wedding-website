import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <LinksWrapper>
        <Link href="/">
          <a>our story</a>
        </Link>
        <Link href="/">
          <a>gallery</a>
        </Link>
        <Link href="/">
          <a>registry</a>
        </Link>
        <Link href="/">
          <a>rsvp</a>
        </Link>
      </LinksWrapper>
      <Logo>
        <h3>
          cameron
          <br /> and
          <br /> nicole
        </h3>
      </Logo>
      <Address>
        the white shanty <br /> 502 S 300 W <br /> Provo, UT 84601
      </Address>
      <Line></Line>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
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

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 146px;
  width: 160px;
  background-color: #ddbea9;
  color: #fff;
  border-radius: 8px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 604px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
    margin-bottom: 48px;
  }
`;

const Address = styled.h3`
  text-align: center;
  font-size: 14px;
`;

const Line = styled.div`
  height: 18px;
  width: 100%;
  border-radius: 8px;
  background-color: #ddbea9;
`;
