import React from 'react'

import Text from '../../components/atoms/Text/Text'
import SignInFormContainer from '../../containers/SignInFormContainer'

import { TemplateSignInStyled } from './TemplateSignInStyled'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Text type="h2">Вход</Text>
          </div>
        </div>
        <div className="row">
          <div className="offset-4" />
          <div className="col-lg-4">
            <SignInFormContainer />
          </div>
          <div className="offset-4" />
        </div>
      </div>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
