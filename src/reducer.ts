import { DispatchArgs, IState } from 'StateProvider'

export const stateKey = 'state'

export const ACTIONS = {
  SET_SCHEDULE: 'SET_SCHEDULE'
}

const prevState = localStorage.getItem(stateKey)

const skeletonState = {

}

export const initialState: IState = prevState ? JSON.parse(prevState) : skeletonState

const reducer = (state = initialState, action: DispatchArgs) => {
  switch (action.type) {
    case ACTIONS.SET_SCHEDULE: {
      return state
    }

    default:
      return state
  }
}

export default reducer
