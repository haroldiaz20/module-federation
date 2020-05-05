import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
// lazy load goals
const Goals = React.lazy(() => import("./Goals"))
// lazy load agentsites
const AgentSites = React.lazy(() => import("./AgentSites"))

const routes = [
  {
    path: "/kelleguides/goals",
    component: Goals,
  },
  {
    path: "/kelleguides/agentsites",
    component: AgentSites,
  },
]

const StyledContainer = styled.div`
  font-family: Muli;
  box-sizing: border-box;
  padding: 1.5em;
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: row;
  }
`

const KGSubcontainer = styled.div`
  display: flex;
  flow-direction: column !important;
`

const UlKgMenu = styled.ul`
  min-width: 10rem;
  & > li {
    padding: 0.5rem 0;
    list-style-type: disc;
    & > a {
      text-decoration: none;
      color: #007d99;
      > :hover {
        text-decoration: underline;
      }
    }
  }
`

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <React.Suspense fallback="Loading KG routes">
          <route.component {...props} routes={route.routes} />
        </React.Suspense>
      )}
    />
  )
}

function KelleGuideApp() {
  return (
    <Router>
      <StyledContainer>
        <h1>⛄ Kelle Guides</h1>
        <KGSubcontainer>
          <UlKgMenu>
            <li>
              <Link to={`/kelleguides/goals`}>Goals KG</Link>
            </li>
            <li>
              <Link to={`/kelleguides/agentsites`}>Agent Sites KG</Link>
            </li>
          </UlKgMenu>

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </KGSubcontainer>
      </StyledContainer>
    </Router>
  )
}

export default KelleGuideApp
