import React from "react"
import styled from "styled-components"
import GoalsImg from "../../static/goals.png"

// lazy load line component from remote dashboard app
const RemoteLineGraph = React.lazy(() => import("dashboard/LineGraph"))

const GoalsKelleguideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column !important;
  border: 1px solid red;
  padding: 1em;
  & > h2 {
    text-align: center;
  }

  & > img {
    width: 100%;
    margin: 0 auto;
  }

  & .LineGraph {
    width: 50%;
  }
`

const IndexGoals = () => (
  <GoalsKelleguideContainer>
    <h2>Goals KG</h2>
    <img src={GoalsImg} />
    {/** <React.Suspense fallback="Loading line graph from remote app...">
      <RemoteLineGraph className="LineGraph" showOptions={false} />
</React.Suspense> */}
  </GoalsKelleguideContainer>
)

export default IndexGoals
