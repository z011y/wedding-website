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
    <GalleryImage>
      <motion.img
        whileHover={{
          y: -24,
          transition: { type: "spring", stiffness: 100 },
        }}
        whileTap={{
          scale: 5,
        }}
        style={{
          borderRadius: "8px",
          marginTop: "48px",
          width: "300px",
        }}
        src={src}
        onClick={() => setActiveImage(index)}
      />
    </GalleryImage>
  );
}

const GalleryImage = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
