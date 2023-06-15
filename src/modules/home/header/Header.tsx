import { FC } from "react";
import { Search } from "../search/Search";
import { FilterCarrousel } from "../filterCarrousel/FilterCarrousel";
import { HeaderI } from "./styles";
import { DesktopHeader } from "../desktopHeader";

export const Header: FC = () => {
  return (
    <HeaderI>
      <DesktopHeader />
      <Search />
      <FilterCarrousel />
    </HeaderI>
  );
};
