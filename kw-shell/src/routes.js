import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledUl = styled.ul`
  padding-inline-start: 0;

  & > li > a {
    text-decoration: none;
  }
`

export default function Routes() {
  return (
    <StyledUl>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/kelleguides">Kelle Guides</Link>
      </li>
    </StyledUl>
  )
}
