import styled from "styled-components";
import { useState } from "react";
import { ExternalLink, Info, X, Copy } from "react-feather";
import { NoUndefinedVariablesRule } from "graphql";

export default function Registry() {
  const [active, setActive] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText("@cameroncharles");
  };

  return (
    <StyledContent>
      <StyledHero></StyledHero>
      <StyledLinks>
        <StyledTitle>registry</StyledTitle>
        <p>We are registered at the following stores:</p>
        <StyledLink href="https://target.com" target="blank">
          <ExternalLink />
          target
        </StyledLink>
        <StyledLink href="https://amazon.com" target="blank">
          <ExternalLink />
          amazon
        </StyledLink>
        <p>
          If you would prefer to help us with our honeymoon and home fund, feel
          free to Venmo us instead:
        </p>
        <p>Click for QR code:</p>
        <StyledLink onClick={() => setActive(!active)}>
          <Info />
          venmo
        </StyledLink>
        <p>Click to copy Venmo username:</p>
        <CopyToClipboard onClick={copyToClipboard}>
          <Copy />
          <p
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0px" }}
          >
            @cameroncharles_
          </p>
          {copied ? (
            <p style={{ marginLeft: "24px", marginBottom: "0px" }}>Copied!</p>
          ) : null}
        </CopyToClipboard>
        {active ? (
          <VenmoQRCode>
            <Close onClick={() => setActive(false)} />
            <img src="/images/venmoQR.JPG" />
          </VenmoQRCode>
        ) : null}
      </StyledLinks>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh + 16px);
  display: grid;
  grid-template-columns: 1fr 512px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    background-color: #eddcd2;
  }
`;

const StyledHero = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("images/photo10.jpeg");
  background-position: 50% 100%;
  background-size: cover;

  @media (max-width: 1160px) {
    display: none;
  }
`;

const StyledLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 144px;
  padding-left: 48px;
  padding-right: 48px;
  margin-bottom: 48px;
  text-align: left;

  p {
    font-size: 14px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-bottom: 12px;
  }

  @media (max-width: 1160px) {
    padding-top: 264px;
  }

  @media (max-width: 804px) {
    padding-top: 144px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  letter-spacing: 10px;
`;

const StyledLink = styled.a`
  font-size: 24px;
  background-color: #ddbea9;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 12px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1160px) {
    width: 100%;
    align-self: center;
  }

  @media (max-width: 415px) {
    width: 100%;
  }
`;

const VenmoQRCode = styled.div`
  position: fixed;
  height: calc(100% - 48px);
  top: 24px;
  right: calc(512px + 24px);
  z-index: 2;

  img {
    height: 100%;
    border-radius: 8px;
  }

  @media (max-width: 1160px) {
    right: 24px;
  }

  @media (max-width: 415px) {
    width: 100vw;
    height: auto;
    right: 0px;
    top: 0px;

    img {
      height: auto;
      width: 100%;
    }
  }
`;

const Close = styled(X)`
  position: absolute;
  top: 24px;
  right: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const CopyToClipboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: 12px;
  }
`;
