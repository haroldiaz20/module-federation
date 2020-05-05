import React from "react"
import { Link } from "react-router-dom"

const GoalsStepOne = () => (
  <>
    <h2>Goals KG: Step 1</h2>
    <Link to={`/kelleguides/goals/1`}>Back</Link>
    <Link to={`/kelleguides/goals/2`}>Next</Link>
  </>
)

export default GoalsStepOne
