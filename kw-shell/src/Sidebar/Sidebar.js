import React, { useState, useEffect } from "react"
import styled from "styled-components"
import cx from "classnames"

const StyledSidebar = styled.nav`
  color: #000000;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15), 0px 1px 6px rgba(0, 0, 0, 0.1),
    0px 0px 1px rgba(0, 0, 0, 0.4);
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 100px;
  height: calc(100vh - 80px);
  color: #f5f5f6;
  display: flex;
  align-items: center;
  justify-content: center;
  & > ul > li {
    padding: 0.5rem;
    a {
      color: #373f51;
      &: hover {
        color: #ce011f;
      }
    }
  }
`

const Sidebar = (props) => {
  const [mode, setMode] = useState(props.theme)

  useEffect(() => {
    setMode(props.theme)
  }, [props.theme, mode])

  return (
    <StyledSidebar
      className={cx({
        [props.className]: props.className,
      })}
    >
      {props.children}
    </StyledSidebar>
  )
}

export default Sidebar
