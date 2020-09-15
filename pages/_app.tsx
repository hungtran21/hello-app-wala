import 'styles/globals.css'
import { AppProps } from 'next/app'
import { wrapper } from './api/store'
import { ReactReduxContext, useStore } from 'react-redux'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore();
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
