import { call, takeEvery, put, delay } from 'redux-saga/effects'
import {
  IUserFetchAccountAction,
  IUserLoginAction,
  userAuthAction,
  userFetchAccountAction,
  userLogoutAction,
} from '../store/user/actions'
import userAPI from '../api/UserAPI'
import {
  notificationAddItemAction,
  notificationRemoveItemAction,
} from '../store/root/actions'

function* loginAsync(action: IUserLoginAction) {
  try {
    const authData = yield call(
      userAPI.login,
      action.payload.login,
      action.payload.password,
      action.payload.remember,
    )

    if (authData) {
      yield put(userFetchAccountAction(authData.id, authData.accessToken))
    } else {
      const dateNow = Date.now()
      yield put(
        notificationAddItemAction({
          id: dateNow,
          status: 'error',
          message: 'Неверный логин / пароль',
        }),
      )
      yield delay(2500)
      yield put(notificationRemoveItemAction(dateNow))
    }
  } catch (error) {
    console.log(error)
    yield put(userLogoutAction())
  }
}
function* fetchAccountAsync(action: IUserFetchAccountAction) {
  try {
    const item = yield call(
      userAPI.fetchAccount,
      action.payload.id,
      action.payload.accessToken,
    )

    if (item) {
      yield put(userAuthAction(item))

      const dateNow = Date.now()
      yield put(
        notificationAddItemAction({
          id: dateNow,
          status: 'info',
          message: `Добро пожаловать, ${item.firstName}`,
        }),
      )
      yield delay(2500)
      yield put(notificationRemoveItemAction(dateNow))
    } else {
      alert('Недействительный токен')
    }
  } catch (error) {
    yield put(userLogoutAction())
  }
}

export default function* userSaga() {
  yield takeEvery('LOGIN', loginAsync)
  yield takeEvery('FETCH_ACCOUNT', fetchAccountAsync)
}
