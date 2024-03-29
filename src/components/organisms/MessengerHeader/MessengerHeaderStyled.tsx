import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const MessengerHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`
export const MessengerHeaderSideStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`
