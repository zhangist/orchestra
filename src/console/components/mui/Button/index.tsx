import MuiButton from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import Options from '../../Options'

const theme = Options.theme

// extend from Mui.Button
const Button = withStyles({
  root: {
    borderRadius: '0px',
    minHeight: '0px',
    height: `${theme.button.height}`,
  },
})((props: any) => {
  return (
    <MuiButton {...props} classes={{
      root: props.classes.root,
    }} />
  )
})

export default Button
