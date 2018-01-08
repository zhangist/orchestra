import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import Dialog2 from "../../components/dialog";

import { DialogActions, DialogTitle } from "material-ui/Dialog";
import Typography from "material-ui/Typography";
import {
  AppBar,
  Button,
  Content,
  Dialog,
  DialogContent,
  Header,
  Icon,
  IconText,
  ModalPage,
  ModalPageContent,
  ModalPageFooter,
  ModalPageHeader,
  TextUnderline,
  Toolbar,
} from "../../components/AppElements";

import "./app.styl";

interface IProps {
  route: any;
  socket: any;
  actions: any;
  history: any;
}

const size = "big";

class App extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showConnectDialog: false,
      showConnectModal: false,
    };
  }

  public render() {
    const {
      showConnectDialog,
    } = this.state;
    const {
      route,
      socket,
      history,
    } = this.props;

    return (
      <div className="app">
        <Header>
          <Button
            onClick={() => history.push("/")}
          >
            HOME
          </Button>
          <Button
            onClick={() => this.setState({ showConnectDialog: true })}
          >
            {socket.id ? "Connected" : "Connect"}
          </Button>
          <Button
            style={{ float: "right" }}
            onClick={() => this.setState({ showConnectDialog: true })}
          >
            {socket.id ? "Connected" : "Connect"}
          </Button>
        </Header>
        <Content>
          <Scrollbars universal>
            {renderRoutes(route.routes)}
          </Scrollbars>
        </Content>
        {this.renderConnectModal()}
        {this.renderConnectDialog()}
      </div>
    );
  }

  private connect() {
    console.log();
  }

  private renderConnectModal() {
    return (
      <ModalPage
        disableAutoFocus
        open={this.state.showConnectModal}
        onClose={() => this.setState({ showConnectModal: false })}
        innerStyle={{
          maxWidth: "300px",
        }}
      >
        <ModalPageHeader>
          <Header>
            <Button
              color="inherit"
              onClick={() => this.setState({ showConnectModal: false })}
            >
              <IconText><TextUnderline>C</TextUnderline>ancel</IconText>
            </Button>
          </Header>
        </ModalPageHeader>
        <ModalPageContent>
          <Scrollbars universal>
            <div style={{
              backgroundColor: "#ccc",
              height: "800px",
              maxWidth: "600px",
              outline: "none",
              width: "600px",
            }}>test</div>
          </Scrollbars>
        </ModalPageContent>
        <ModalPageFooter>123</ModalPageFooter>
      </ModalPage>
    );
  }

  private renderConnectDialog() {
    return (
      <ModalPage
        disableAutoFocus
        open={this.state.showConnectDialog}
        onClose={() => this.setState({ showConnectDialog: false })}
        innerStyle={{
          maxWidth: "300px",
        }}
      >
        <ModalPageHeader>
          <Header>
            <Button
              color="inherit"
              onClick={() => this.setState({ showConnectDialog: false })}
            >
              <IconText><TextUnderline>C</TextUnderline>ancel</IconText>
            </Button>
            <Button
              color="inherit"
              onClick={() => this.setState({ showConnectModal: true })}
            >
              <IconText><TextUnderline>O</TextUnderline>pen Modal</IconText>
            </Button>
          </Header>
        </ModalPageHeader>
        <ModalPageContent>
          <Scrollbars universal>
            <div style={{
              backgroundColor: "#ccc",
              height: "800px",
              maxWidth: "600px",
              outline: "none",
              width: "600px",
            }}>test</div>
          </Scrollbars>
        </ModalPageContent>
        <ModalPageFooter>123</ModalPageFooter>
      </ModalPage>
    );
  }

  private renderConnectDialog1() {
    return (
      <Dialog
        fullWidth
        // style={{ margin: "auto", maxWidth: "600px" }}
        open={this.state.showConnectDialog}
      >
        {/* <AppBar>
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => this.setState({ showConnectDialog: false })}
            >
              <Icon className="icon-cross-thin"/>
              <IconText left>Can_cel</IconText>
            </Button>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar> */}
        <DialogTitle>111</DialogTitle>
        <DialogContent>
          <div style={{ maxWidth: "600px", height: "800px" }}>test</div>
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            onClick={() => this.setState({ showConnectDialog: false })}
          >
            <IconText><TextUnderline>C</TextUnderline>ancel</IconText>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  private renderConnectDialog2() {
    return (
      <Dialog2
        buttons={[
          <Button
            key="connect4"
            onClick={() => this.setState({ showConnectDialog: false })}
          >
            <Icon className="icon-cross-thin"/>
            <IconText>Cancel</IconText>
          </Button>,
        ]}
      >
        <span>test</span>
      </Dialog2>
    );
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    route: props.route,
    socket: state.socket || {},
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
