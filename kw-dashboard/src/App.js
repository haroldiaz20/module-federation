import React, { useState, useEffect } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import reducer, { changeAppNameAction } from "./reducer"
import styled from "styled-components"
const Line = React.lazy(() => import("./Charts/Line"))
const Bars = React.lazy(() => import("./Charts/Bars"))

const remoteAppScope = "dashboardApp"

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

const StyledDiv = styled.div`
  border: 1px solid red;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column !important;
`
const ChartContainer = styled.div`
  box-sizing: border-box;
  padding-top: 1.5rem;
  height: 200px;
  width: 50%;
`

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state[remoteAppScope])
  const [remoteAppInput, setRemoteAppInput] = useState("")
  return (
    <StyledContainer>
      <h1>🏡 Dashboard</h1>
      <h4>current team: {JSON.stringify(state.team)}</h4>
      {/** <StyledDiv>
        <span>
          Username: <strong>{state && state.userName}</strong>
        </span>
        <div>
          <input
            style={{ marginRight: "10px" }}
            type="text"
            onChange={(e) => {
              setRemoteAppInput(e.target.value)
            }}
          />
          <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
            Update my name in the store
          </button>
        </div>
      </StyledDiv>
          **/}
      <div>
        <ChartContainer>
          <React.Suspense fallback="Loading line chart...">
            <Line />
          </React.Suspense>
        </ChartContainer>
        <ChartContainer>
          <React.Suspense fallback="Loading bars chart...">
            <Bars />
          </React.Suspense>
        </ChartContainer>
      </div>
    </StyledContainer>
  )
}

const DashboardAppWrapper = (props) => {
  const { store } = props
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer)
  }, [])

  return (
    <Provider store={store || {}}>
      <App />
    </Provider>
  )
}

export default DashboardAppWrapper
