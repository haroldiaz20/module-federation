import React, { useState, useEffect } from "react"
import { Provider, useSelector, useDispatch } from "react-redux"
import ReactDOM from "react-dom"
import Select from "react-select"
import styled from "styled-components"
import Bar from "./Bar"
import reducer, { changeTeamAction } from "./reducer"

const remoteAppScope = "dashboardApp"

const options = [
  { value: "a-team", label: "🎯 Keller Test Team" },
  { value: "b-team", label: "🎃 Keller Realty Group" },
]

const StyledBarContiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  & > .SelectTeam {
    color: black;
    width: 200px;
    margin-left: 1rem;
    margin-right: 2rem;
    text-align: left;
  }
`

const TopBar = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state[remoteAppScope])
  const [selectedOption, setSelectedOption] = useState(null)

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption)
    dispatch(changeTeamAction(selectedOption))
  }

  return (
    <Bar>
      <StyledBarContiner>
        <Select
          className="SelectTeam"
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder="Select a team"
        />
        <h3 style={{ color: "#CE011F" }}>
          Welcome:{" "}
          <span style={{ color: "#FFFFFF" }}>{state && state.userName}</span> 🧑🏻
        </h3>
      </StyledBarContiner>
    </Bar>
  )
}

// this function can be a defined somewhere else so we can reuse it
// maybe to create a HOC
const TopBarWrapper = (props) => {
  const { store } = props
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer)
  }, [])

  return (
    <Provider store={store || {}}>
      <TopBar />
    </Provider>
  )
}

export default TopBarWrapper
