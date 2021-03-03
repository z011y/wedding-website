import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Image({
  src,
  id,
  index,
  active,
  setActiveImage,
  close,
  left,
  right,
}) {
  return (
    <StyledGalleryImage>
      <StyledImage
        whileHover={{
          y: -24,
          transition: { type: "spring", stiffness: 100 },
        }}
        src={src}
        onClick={() => setActiveImage(index)}
      />
    </StyledGalleryImage>
  );
}

const StyledGalleryImage = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const StyledImage = styled(motion.img)`
  border-radius: 8px;
  margin-top: 48px;
  width: 300px;
`;
