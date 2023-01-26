export default function ({ store, redirect, route }) {
  const accessToken = store.state.auth.accessToken

  if (typeof accessToken === 'undefined' || accessToken === '') {
    redirect('/')
  }
}
