import * as React from "react";
import styled, { StyledFunction } from "styled-components";
import Options from "./Options";
import Themes from "./Themes";

const themeOptions = Options.theme;

interface IProps {
  size?: string;
}

// Header
const HeaderDiv: StyledFunction<IProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const Header = HeaderDiv`
  height: ${Themes.header.size[themeOptions.size]}px;
  background: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
`;

// Header
const ContentDiv: StyledFunction<IProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const Content = ContentDiv`
  color: #fff;
  background: #333;
  position: absolute;
  top: ${Themes.header.size[themeOptions.size]}px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export {
  Header,
  Content,
};
export *  from "../components/mui-custom";
