import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

import MobileMenu from "./mobileMenu";

export default function Header() {
  const router = useRouter();
  const activeLinkStyle = {
    fontWeight: "400",
  };

  return (
    <StyledHeader>
      <Link href="/">
        <StyledLogo>
          <h3>cameron and nicole</h3>
        </StyledLogo>
      </Link>
      <StyledLinksWrapper>
        <Link href="/ourStory">
          <a style={router.pathname === "/ourStory" ? activeLinkStyle : null}>
            our story
          </a>
        </Link>
        <Link href="/gallery">
          <a style={router.pathname === "/gallery" ? activeLinkStyle : null}>
            gallery
          </a>
        </Link>
        <Link href="/registry">
          <a style={router.pathname === "/registry" ? activeLinkStyle : null}>
            registry
          </a>
        </Link>
        <Link href="/rsvp">
          <a style={router.pathname === "/rsvp" ? activeLinkStyle : null}>
            rsvp
          </a>
        </Link>
      </StyledLinksWrapper>
      <MobileMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 48px;

  @media (max-width: 804px) {
    height: 48px;
    background-color: #fff1e6;
    padding: 0px;
    position: fixed;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 146px;
  width: 160px;
  background-color: #fff1e6;
  border-radius: 8px;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 804px) {
    position: relative;
    height: 48px;
    width: 100%;
    padding: 0 0 0 12px;
    justify-content: flex-start;
  }
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 804px) {
    display: none;
  }
`;
