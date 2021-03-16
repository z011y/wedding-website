import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function MobileNav() {
  const router = useRouter();
  const activeLinkStyle = {
    fontWeight: "400",
  };

  return (
    <StyledNav>
      <StyledLinksWrapper>
        <Link href="/">
          <a style={router.pathname === "/" ? activeLinkStyle : null}>home</a>
        </Link>
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
    </StyledNav>
  );
}

const StyledNav = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
  margin-top: 48px;
  background-color: #fff1e6;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  width: 100%;
`;
