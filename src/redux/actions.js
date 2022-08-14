import {
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_SITE_READY,
  SET_TOAST,
} from "./types"

export const setIsMobile = (payload) => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setMobileMenu = (payload) => ({
  type: SET_MOBILE_MENU,
  payload,
})

export const setSiteReady = (payload) => ({
  type: SET_SITE_READY,
  payload,
})

export const setToast = (payload) => ({
  type: SET_TOAST,
  payload,
})
