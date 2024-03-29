import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const TemplateContactsStyled = styled.div<IProps>`
  ${() => css`
    position: relative;
    min-height: 100%;
    padding-bottom: 47px;
  `}
`
export const TemplateContactsHeaderStyled = styled.div<IProps>`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const TemplateContactsContentStyled = styled.div<IProps>``
export const TemplateContactsFooterStyled = styled.div<IProps>`
  ${() => css`
    width: 100%;
    position: absolute;
    top: calc(100% - 47px);
    left: 0;
  `}
`
export const TemplateContactsAccountStyled = styled.div<IProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: none;
    padding-top: ${theme.sizes.stepSize}px;

    @media (max-width: 991.98px) {
      display: block;
    }
  `}
`
