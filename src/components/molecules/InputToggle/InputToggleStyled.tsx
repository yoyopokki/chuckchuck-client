import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const InputToggleStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    user-select: none;

    &:hover {
      opacity: 0.5;
    }

    & > *:not(:first-child):not(:empty) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }

    @media screen and (max-width: 991.98px) {
      &:hover {
        opacity: 1;
      }
    }
  `}
`

export default InputToggleStyled
