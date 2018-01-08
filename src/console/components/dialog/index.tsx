import * as React from "react";
import { componentWillAppendToBody } from "react-append-to-body";
import Scrollbars from "react-custom-scrollbars";
import "./style.styl";

// append to body
const appendComponent = ({ children }: any) => children;
const AppendComponent = componentWillAppendToBody(appendComponent);

interface IProps {
  buttons?: [JSX.Element];
  className?: string;
  children?: JSX.Element;
  fullScreen?: boolean;
  dialogStyle?: object;
  innerStyle?: object;
  topStyle?: object;
  contentStyle?: object;
  maskStyle?: object;
}

class Dialog extends React.PureComponent<IProps, any> {
  private static defaultProps = {
    buttons: [],
    children: null,
    className: "",
    contentStyle: {},
    dialogStyle: {},
    fullScreen: false,
    innerStyle: {},
    maskStyle: {},
    topStyle: {},
  };

  public renderDialog(styles: any) {
    const {
      buttons,
      className,
      children,
      fullScreen,
      dialogStyle,
      innerStyle,
      topStyle,
      contentStyle,
      maskStyle,
    } = this.props;

    return (
      <AppendComponent>
        <div
          className={`sl-dialog${className ? ` ${className}` : ""}${fullScreen ? " c-full-screen" : ""}`}
          style={(Object as any).assign({}, dialogStyle, styles.dialogStyle)}
        >
          <div className="c-inner" style={(Object as any).assign({}, innerStyle, styles.innerStyle)}>
            <div className="c-top" style={(Object as any).assign({}, topStyle, styles.topStyle)}>
              {buttons}
            </div>
            <div className="c-content" style={(Object as any).assign({}, contentStyle, styles.contentStyle)}>
              <Scrollbars>
                {children}
              </Scrollbars>
            </div>
          </div>
          <div className="c-mask" style={(Object as any).assign({}, maskStyle, styles.maskStyle)} />
        </div>
      </AppendComponent>
    );
  }

  public render() {
    return this.renderDialog({});
  }
}

export default Dialog;
