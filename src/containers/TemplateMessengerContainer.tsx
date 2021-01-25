import React, { useEffect } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface IProps {}

const TemplateMessengerContainer = (props: IProps) => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (!user.isAuth) {
      history.push('/')
    }
  }, [user, history])

  return <React.Fragment>{user.isAuth && <TemplateMessenger />}</React.Fragment>
}

export default TemplateMessengerContainer