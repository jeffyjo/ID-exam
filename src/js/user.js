let user = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
let isLoggedIn = window.localStorage.isLoggedIn ? JSON.parse(window.localStorage.isLoggedIn) : null

export default user
export { isLoggedIn }

