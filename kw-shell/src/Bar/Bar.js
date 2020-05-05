import React, { useState, useEffect } from "react"
import styled from "styled-components"
import cx from "classnames"

const StyledBar = styled.div`
  background: #373f51;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15), 0px 1px 6px rgba(0, 0, 0, 0.1),
    0px 0px 1px rgba(0, 0, 0, 0.4);
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  height: 80px;
  color: #f5f5f6;
  display: flex;
  align-items: center;
  justify-content: start;
  & > span {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100px;
    background-color: #CE011F;
    justify-content: center;
  }
  & > div {
    padding: 0 0.5rem;
    display: flex;
    flex-grow: 8;
    align-items: center;
    justify-content: center;
  }
`

const Bar = (props) => {
  const [mode, setMode] = useState(props.theme)

  useEffect(() => {
    setMode(props.theme)
  }, [props.theme, mode])

  return (
    <StyledBar
      className={cx({
        [props.className]: props.className,
      })}
    >
      <span>
        <svg width="32" height="32" viewBox="0 0 32 32" role="presentation">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 6v18h2.493v-4.222l1.827-1.83L9.862 24h2.526L9.03 15.97l2.357-2.49L15.957 24h.96l3.43-8.246L23.83 24h.946L30 12h-2.558L24.3 19.226 21.248 12h-1.764l-3.074 7.226L13.249 12H9.934l-4.441 4.327V6H3z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <div>{props.children}</div>
    </StyledBar>
  )
}

export default Bar
