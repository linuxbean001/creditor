import decode from 'jwt-decode'
export const localDataSet = {
  setLocal,
  getLocal,
  removeLocal
}

function setLocal (name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function getLocal (name) {
  const token = JSON.parse(localStorage.getItem(name))
  return !!token && !isTokenExpired(token)
}

function isTokenExpired (token) {
  try {
    const decoded = decode(token)
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired. N
      return true
    } else return false
  } catch (err) {
    return false
  }
}

function removeLocal (name) {
  localStorage.removeItem(name)
}

