import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from "history"

import Routes from "./routes"
import Sidebar from "./Sidebar"
import TopBarWrapper from "./topbar"

// Import store
import { store } from "./store"

// define a dynamic federation method
const dynamicFederation = (scope, module) => {
  window[scope].override(
    Object.assign(
      {
        react: () => {
          return Promise.resolve().then(() => {
            return () => require("react")
          })
        },
        "react-dom": () => {
          return Promise.resolve().then(() => {
            return () => require("react-dom")
          })
        },
      },
      __webpack_require__.O
    )
  )

  return window[scope].get(module).then((factory) => {
    const Module = factory()
    return Module
  })
}

// Define global styles
const GlobalStyle = createGlobalStyle`
 body {
     margin: 0;
     padding: 0;
     font-family: Muli,
 }
`

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`

const Main = styled.div`
  padding: 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: auto;
`

// Load history for react router
const history = createBrowserHistory()

// Load remote modules

const RemoteDashboard = React.lazy(() =>
  dynamicFederation("dashboard", "DashboardApp")
)
const RemoteKG = React.lazy(() => import("kelleguides/KelleGuideApp"))

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TopBarWrapper store={store} />
      <Container>
        <Router history={history}>
          <Sidebar>
            <Routes />
          </Sidebar>
          <Main>
            <Switch>
              <Route exact path="/">
                <React.Suspense fallback="Loading Dashboard">
                  <RemoteDashboard store={store} />
                </React.Suspense>
              </Route>
              <Route exact path="/kelleguides">
                <React.Suspense fallback="Loading KG">
                  <RemoteKG />
                </React.Suspense>
              </Route>
            </Switch>
          </Main>
        </Router>
      </Container>
    </Provider>
  )
}

export default App
