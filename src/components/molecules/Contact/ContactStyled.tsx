import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ContactStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundMiddleColor};
    padding: ${theme.sizes.tsFontSize}px;
    box-sizing: border-box;
    border-radius: ${theme.sizes.borderRadius}px;
    box-shadow: ${theme.effects.boxShadow};
    cursor: pointer;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`

export default ContactStyled