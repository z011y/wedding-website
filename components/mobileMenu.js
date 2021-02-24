import styled from "styled-components";
import { useState } from "react";
import { Menu, X } from "react-feather";
import { useEffect } from "react";

import MobileNav from "./mobileNav";

export default function MobileMenu() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    toggled
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = null);
  }, [toggled]);

  return (
    <MenuWrapper>
      <MenuIcon onClick={() => setToggled(!toggled)}>
        {toggled ? <X /> : <Menu />}
        {toggled ? <MobileNav /> : null}
      </MenuIcon>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 48px;
  width: 48px;

  @media (min-width: 805px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  width: 24px;

  &:hover {
    cursor: pointer;
  }
`;
