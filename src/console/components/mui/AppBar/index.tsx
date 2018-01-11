import MuiAppBar from 'material-ui/AppBar'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import Options from '../../Options'

const theme = Options.theme

// extend from Mui.AppBar
const AppBar = withStyles({
  colorPrimary: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    color: '#333',
  },
})((props: any) => {
  return (
    <MuiAppBar {...props} classes={{
      colorPrimary: props.classes.colorPrimary,
    }} />
  )
})

export default AppBar
