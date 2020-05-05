const initialState = {
  appName: "dashboard",
  userName: "Kelle1",
  team: {},
}

const CHANGE_APP_NAME = "CHANGE_APP_NAME"
const CHANGE_CURRENT_TEAM = "CHANGE_CURRENT_TEAM"

const changeAppNameAction = (userName) => {
  return { type: CHANGE_APP_NAME, payload: userName }
}

const changeTeamAction = (team) => {
  return { type: CHANGE_CURRENT_TEAM, payload: team }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME: {
      return {
        ...state,
        userName: action.payload,
      }
    }
    case CHANGE_CURRENT_TEAM: {
      return {
        ...state,
        team: action.payload,
      }
    }
  }
  return state
}

export { changeAppNameAction }
export default reducer
