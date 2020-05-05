import React from "react"
import AgentSitesImg from "../../static/agentsites.png"
import styled from "styled-components"

const AgentSitesContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  border: 1px solid red;
  padding: 1em;
  & > h2 {
    text-align: center;
  }
`

const IndexAgentSites = () => (
  <AgentSitesContainer>
    <h2>Agent Sites KG</h2>
    <img style={{ width: "80%", margin: "0 auto" }} src={AgentSitesImg} />
  </AgentSitesContainer>
)

export default IndexAgentSites
