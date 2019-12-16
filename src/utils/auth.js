import Cookies from 'js-cookie'

const wTokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(wTokenKey)
}

export function setToken(token) {
  return Cookies.set(wTokenKey, token)
}

export function removeToken() {
  return Cookies.remove(wTokenKey)
}
