"use client";
import { useState } from "react";
import MenuBtn from "../menuBtn/MenuBtn";
import Menu from "./Menu";

const MenuWrapper = () => {
  const [state, setState] = useState(false);
  const handler = () => setState((p) => !p);

  return (
    <>
      <Menu isOpen={state} />
      <MenuBtn handler={handler} />
    </>
  );
};

export default MenuWrapper;
