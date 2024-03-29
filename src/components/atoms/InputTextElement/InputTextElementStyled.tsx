import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  type?: 'text' | 'password' | 'email'
  placeholder?: string
}

const InputTextElementStyled = styled.input.attrs((props: IProps) => ({
  type: props.type ? props.type : 'text',
  placeholder: props.placeholder ? props.placeholder : 'Введите значение',
}))<IProps>`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    font-style: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    font-size: ${theme.sizes.tsFontSize}px;
    line-height: ${theme.sizes.tsLineHeight}px;
    outline: none;
    margin: 0;
    padding: ${theme.sizes.tsFontSize}px ${theme.sizes.tsFontSize * 2}px;
    letter-spacing: -0.5px;
    background-color: transparent;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${theme.colors.greyColor};
    }
  `}
`

export default InputTextElementStyled
