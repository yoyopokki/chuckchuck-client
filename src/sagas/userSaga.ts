import { call, takeLatest, put } from 'redux-saga/effects'
import {
  userAuthAction,
  userFetchAccountAction,
  userLoginAction,
  userLogoutAction,
} from '../store/user/actions'
import userAPI from '../api/UserAPI'
import { notificationAddItemAction } from '../store/notification/actions'
import {
  EUserActionTypes,
  IUserFetchAccountAction,
  IUserLoginAction,
  IUserRegisterAction,
} from '../store/user/types'
import {
  rootDisablePreloaderAction,
  rootEnablePreloaderAction,
} from '../store/root/actions'
import { cleanUserStorage } from '../utils/user-storage'

function* loginAsync(action: IUserLoginAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const authData = yield call(
      userAPI.login,
      action.payload.login,
      action.payload.password,
      action.payload.remember,
    )

    if (authData) {
      yield put(userFetchAccountAction(authData.id, authData.accessToken))
    } else {
      yield put(rootDisablePreloaderAction())

      yield put(
        notificationAddItemAction({
          status: 'error',
          message: 'Неверный логин / пароль',
        }),
      )
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    console.log(error)
    yield logout()
  }
}

function* registerAsync(action: IUserRegisterAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const registeredUserItem = yield call(
      userAPI.register,
      action.payload.login,
      action.payload.firstName,
      action.payload.lastName,
      action.payload.password,
    )
    if (registeredUserItem) {
      yield put(
        userLoginAction(action.payload.login, action.payload.password, true),
      )
    } else {
      yield put(rootDisablePreloaderAction())

      yield put(
        notificationAddItemAction({
          status: 'error',
          message: 'Введены неверные данные',
        }),
      )
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    console.log(error)
    yield logout()
  }
}

function* fetchAccountAsync(action: IUserFetchAccountAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const item = yield call(
      userAPI.fetchAccount,
      action.payload.id,
      action.payload.accessToken,
    )

    if (item) {
      yield put(userAuthAction(item))
    } else {
      yield logout()

      yield put(
        notificationAddItemAction({
          status: 'error',
          message: 'Недействительный токен',
        }),
      )
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    yield logout()
  }
}

function* logout() {
  yield cleanUserStorage()
  yield put(userLogoutAction())
}

function* userSaga() {
  yield takeLatest(EUserActionTypes.LOGIN, loginAsync)
  yield takeLatest(EUserActionTypes.FETCH_ACCOUNT, fetchAccountAsync)
  yield takeLatest(EUserActionTypes.REGISTER, registerAsync)
}

export default userSaga
