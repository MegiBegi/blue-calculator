import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "serviceWorker"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import Loader from "react-loaders"
import { LoaderWrapper } from "utils"
import "loaders.css/src/animations/line-scale-pulse-out.scss"

const loaderType = "line-scale-pulse-out"

const App = React.lazy((): Promise<any> => import("app"))

const fallback = (
  <LoaderWrapper>
    <Loader active type={loaderType} />
  </LoaderWrapper>
)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={fallback}>
        <App />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
