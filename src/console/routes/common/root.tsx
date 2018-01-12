import { DialogActions, DialogTitle } from 'material-ui/Dialog'
import { MuiThemeProvider } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { Dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import * as logger from '../../../lib/logger'
import actions from '../../actions'
import {
  App,
  AppBar,
  Button,
  Content,
  FlexHorizontal,
  FlexVertical,
  Header,
  Icon,
  IconText,
  Menu,
  MenuItem,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Toolbar,
} from '../../components/AppElements'
import Options from '../../components/Options'
import './main.styl'

interface IProps {
  route: any
  socket: any
  actions: any
  history: any
}

const size = 'big'

class Root extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      anchorEl: null,
      showConnectModal: false,
    }
  }

  public handleClick(event: any) {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose() {
    this.setState({ anchorEl: null })
  }

  public render() {
    const {
      anchorEl,
      showConnectDialog,
    } = this.state
    const {
      route,
      socket,
      history,
    } = this.props

    return (
      <App>
        <AppBar>
          <Toolbar>
            <Button onClick={() => history.push('/')}>
              HOME
            </Button>
            <Button onClick={() => this.setState({ showConnectModal: true })}>
              {socket.id ? 'Connected' : 'Connect'}
            </Button>
            <Button
              aria-owns={anchorEl ? 'menu-demo' : null}
              aria-haspopup="true"
              onClick={(e: any) => this.handleClick(e)}
            >
              Open Menu
            </Button>
            <Menu
              id="menu-demo"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => this.handleClose()}
            >
              <MenuItem onClick={() => this.handleClose()}>Profile</MenuItem>
              <MenuItem onClick={() => this.handleClose()}>My account</MenuItem>
              <MenuItem onClick={() => this.handleClose()}>Logout</MenuItem>
            </Menu>
            <FlexHorizontal />
            <Button onClick={() => this.setState({ showConnectModal: true })}>
              {socket.id ? 'Connected' : 'Connect'}
            </Button>
          </Toolbar>
        </AppBar>
        <Content>
          {renderRoutes(route.routes)}
        </Content>
        {this.renderConnectModal()}
      </App>
    )
  }

  private connect() {
    logger.print('connected')
  }

  private renderConnectModal() {
    return (
      <Modal
        disableAutoFocus
        open={this.state.showConnectModal}
        onClose={() => this.setState({ showConnectModal: false })}
        innerStyle={{
          maxWidth: '300px',
        }}
      >
        <ModalHeader>
          <Header>
            <Button
              color="inherit"
              onClick={() => this.setState({ showConnectModal: false })}
            >
              <IconText>Cancel</IconText>
            </Button>
          </Header>
        </ModalHeader>
        <ModalContent>
          <div style={{
            height: '800px',
            maxWidth: '600px',
            outline: 'none',
            width: '600px',
          }}>test</div>
        </ModalContent>
        <ModalFooter>123</ModalFooter>
      </Modal>
    )
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    route: props.route,
    socket: state.socket || {},
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Root))
