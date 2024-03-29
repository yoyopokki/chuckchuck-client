import styled, { css, DefaultTheme } from 'styled-components'
import { isIE } from '../../utils/browser'

interface IProps {
  theme: DefaultTheme
}

export const WireframeMainStyled = styled.div<IProps>`
  ${!isIE() &&
  css`
    height: calc(var(--vh, 1vh) * 100);
  `}
  ${isIE() &&
  css`
    height: 100vh;
  `}
`
export const WireframeMainHeaderStyled = styled.header<IProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  min-height: 61.59px;
`
export const WireframeMainContentStyled = styled.main<IProps>`
  height: 100%;
  max-height: 100%;
  padding-top: 0;
  box-sizing: border-box;
  overflow-y: auto;
`
export const WireframeMainFooterStyled = styled.footer<IProps>`
  width: 100%;
  position: absolute;
  top: calc(100% - 47px);
  left: 0;
`
