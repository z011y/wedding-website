import styled from "styled-components";
import { useState, useEffect } from "react";
import { request } from "graphql-request";
import useSWR from "swr";
import { X, ArrowRight, ArrowLeft } from "react-feather";

import Image from "./image";

export default function Masonry(props) {
  const [active, setActive] = useState(undefined);

  const renderImages = () => {
    let index = -1;
    if (props.error) return <div>failed to load</div>;
    if (!props.data) return <div>loading...</div>;
    return props.data.assets.map((img) => {
      index++;
      return (
        <Image
          src={img.url}
          id={img.id}
          index={index}
          active={active}
          setActiveImage={setActiveImage}
          close={close}
          right={right}
          left={left}
        />
      );
    });
  };

  const setActiveImage = (index) => {
    setActive(index);
  };

  const right = () => {
    if (active !== undefined && active < props.data.assets.length - 1) {
      setActive(active + 1);
    }
  };

  const left = () => {
    if (active !== undefined && active > 0) {
      setActive(active - 1);
    }
  };

  const close = () => {
    if (active !== undefined) {
      setActive(undefined);
    }
  };

  const handleKeydown = (e) => {
    const keyName = e.key;

    if (keyName === "Escape") {
      close();
    } else if (keyName === "ArrowRight") {
      right();
    } else if (keyName === "ArrowLeft") {
      left();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeydown, false);
    };
  });

  useEffect(() => {
    active
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = null);
  }, [active]);

  return (
    <>
      {active >= 0 ? (
        <StyledFullImg
          style={{ backgroundImage: `url(${props.data.assets[active].url})` }}
        >
          <StyledCloseIcon onClick={close} />
          {active < props.data.assets.length - 1 ? (
            <StyledRightIcon onClick={right} />
          ) : null}
          {active > 0 ? <StyledLeftIcon onClick={left} /> : null}
        </StyledFullImg>
      ) : (
        <StyledContent className="gallery">{renderImages()}</StyledContent>
      )}
    </>
  );
}

const StyledContent = styled.div`
  columns: 5 300px;
  column-gap: 48px;
  height: 100%;
  margin-left: 48px;
  margin-right: 48px;

  @media (max-width: 1439px) {
    margin-left: calc((100vw - 900px) / 4);
  }

  @media (max-width: 1091px) {
    margin-left: calc((100vw - 600px) / 3);
  }

  @media (max-width: 743px) {
    columns: 1 300px;
    margin-left: calc((100vw - 300px) / 2);
  }
`;

const StyledFullImg = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;

const StyledCloseIcon = styled(X)`
  position: absolute;
  top: 48px;
  right: 48px;
  border-radius: 8px;
  background-color: white;
  width: 48px;
  height: 48px;
  padding: 12px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledRightIcon = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  right: 48px;
  border-radius: 8px;
  background-color: white;
  width: 48px;
  height: 48px;
  padding: 12px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledLeftIcon = styled(ArrowLeft)`
  position: absolute;
  top: 50%;
  left: 48px;
  border-radius: 8px;
  background-color: white;
  width: 48px;
  height: 48px;
  padding: 12px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
