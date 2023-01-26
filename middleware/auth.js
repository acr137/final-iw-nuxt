export default function ({ store, redirect }) {
  const accessToken = store.state.auth.accessToken

  if (typeof accessToken === 'undefined' || accessToken === '') {
    redirect('/')
  }
}
