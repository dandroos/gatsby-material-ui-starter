import {
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_SITE_READY,
  SET_TOAST,
} from "./types"

const initialState = {
  isMobile: null,
  mobileMenu: false,
  siteReady: false,
  toast: {
    open: false,
    severity: "success",
    msg: "",
  },
}

export const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_MOBILE_MENU:
      newState.mobileMenu = payload
      break
    case SET_SITE_READY:
      newState.siteReady = payload
      break
    case SET_TOAST:
      newState.toast = payload
      break
    default:
      break
  }
  return newState
}
