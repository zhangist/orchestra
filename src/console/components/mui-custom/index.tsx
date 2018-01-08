import MuiAppBar from "material-ui/AppBar";
import MuiButton from "material-ui/Button";
import MuiDialog from "material-ui/Dialog";
import MuiDialogContent from "material-ui/Dialog/DialogContent";
import MuiIcon from "material-ui/Icon";
import MuiModal from "material-ui/Modal";
import MuiToolbar from "material-ui/Toolbar";

import withStyles from "material-ui/styles/withStyles";
import * as React from "react";
import styled, { StyledFunction } from "styled-components";
import Options from "../Options";
import Themes from "../Themes";

const themeOptions = Options.theme;

interface ISizeProps {
  size?: any;
}

// extend from Mui.AppBar
const AppBar = withStyles({
  colorPrimary: {
    "background-color": "#fff",
    "box-shadow": "none",
    "color": "#333",
  },
})((props: any) => {
  return (
    <MuiAppBar {...props} classes={{
      colorPrimary: props.classes.colorPrimary,
    }} />
  );
});

// extend from Mui.Button
const Button = withStyles({
  root: {
    borderRadius: "0px",
    minHeight: "32px",
    padding: `${Themes.button.padding[themeOptions.size]}px`,
  },
})((props: any) => {
  return (
    <MuiButton {...props} classes={{
      root: props.classes.root,
    }} />
  );
});

// extend from Mui.Dialog
const Dialog = withStyles({
  fullScreen: {
  },
})((props: any) => {
  return (
    <MuiDialog {...props} classes={{
      fullScreen: props.classes.fullScreen,
    }} />
  );
});

// extend from Mui.DialogContent
const DialogContent = withStyles({
  root: {
    "background-color": "#333",
  },
})((props: any) => {
  return (
    <MuiDialogContent {...props} classes={{
      root: props.classes.root,
    }} />
  );
});

// extend from Mui.Icon
const Icon = withStyles({
  root: {
    fontSize: "16px",
  },
})((props: any) => {
  return (
    <MuiIcon {...props} classes={{
      root: props.classes.root,
    }} />
  );
});

// new
interface IIconTextProps {
  left?: boolean;
  right?: boolean;
}
const IconText = styled.span`
  font-size: 16px;
  vertical-align: top;
  ${(props: IIconTextProps) => props.left ? `margin-left: 4px;` : ""}
  ${(props: IIconTextProps) => props.right ? `margin-right: 4px;` : ""}
`;

// extend from Mui.Modal
const ModalPage = withStyles({
  root: {
    outline: "none",
  },
})((props: any) => {
  const { innerStyle, ...rest } = props;
  const style = (Object as any).assign({}, {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    margin: "auto",
    maxWidth: "600px",
    outline: "none",
    position: "relative",
    width: "100%",
  }, innerStyle);

  return (
    <MuiModal {...rest} classes={{
      root: props.classes.root,
    }}>
      <div style={style}>
        {props.children ? props.children : null}
      </div>
    </MuiModal>
  );
});
// new
const ModalPageHeaderDiv: StyledFunction<ISizeProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const ModalPageHeader = ModalPageHeaderDiv`
  flex: 0 0 ${Themes.header.size[themeOptions.size]}px;
`;
// new
const ModalPageContent = styled.div`
  width: 100%;
  flex: 1 1 100%;
  position: relative;
`;
// new
const ModalPageFooterDiv: StyledFunction<ISizeProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const ModalPageFooter = ModalPageFooterDiv`
  flex: 0 0 ${Themes.footer.size[themeOptions.size]}px;
`;

// new
const TextUnderline = styled.span`
  text-decoration: underline;
`;

// extend from Mui.Toolbar
const Toolbar = withStyles({
  gutters: {
    "padding-left": "0",
    "padding-right": "0",
  },
  root: {
    "min-height": "48px",
  },
})((props: any) => {
  return (
    <MuiToolbar {...props} classes={{
      gutters: props.classes.gutters,
      root: props.classes.root,
    }} />
  );
});

export {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  Icon,
  IconText,
  ModalPage,
  ModalPageContent,
  ModalPageFooter,
  ModalPageHeader,
  TextUnderline,
  Toolbar,
};
