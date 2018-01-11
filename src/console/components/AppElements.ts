import * as React from 'react'
import styled, { StyledFunction } from 'styled-components'
import Options from './Options'

const theme = Options.theme

/**
 * App
 */
const AppDiv: StyledFunction<React.HTMLProps<HTMLDivElement>> = styled.div
const App = AppDiv`
  height: 100%;
`

/**
 * Header
 */
const HeaderDiv: StyledFunction<React.HTMLProps<HTMLDivElement>> = styled.div
const Header = HeaderDiv`
  height: ${theme.header.height};
  background: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
`

/**
 * Content
 */
const ContentDiv: StyledFunction<React.HTMLProps<HTMLDivElement>> = styled.div
const Content = ContentDiv`
  color: #fff;
  background: #333;
  position: absolute;
  top: ${theme.content.top};
  right: 0px;
  bottom: 0px;
  left: 0px;
`

/**
 * FlexHorizontal
 */
const FlexHorizontal = styled.div`
  flex: 1 1 auto;
`

/**
 * FlexHorizontal
 */
const FlexVertical = styled.div`
  flex: 1 1 100%;
`

export {
  App,
  Header,
  Content,
  FlexHorizontal,
  FlexVertical,
}
export *  from '../components/mui'
