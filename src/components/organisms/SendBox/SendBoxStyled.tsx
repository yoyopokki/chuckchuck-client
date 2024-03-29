import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const SendBoxStyled = styled.form<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`
export const SendBoxTextareaStyled = styled.div`
  width: 100%;
`
export const SendBoxSubmitStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
