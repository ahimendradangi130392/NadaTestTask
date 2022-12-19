import { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react'
import { initialState as is } from 'reducer'

export interface DispatchArgs {
  type: string
  payload: any
}

type IReducer = (state: IState, action: DispatchArgs) => IState

export interface IState {
  
}

interface IStateProvider {
  reducer: IReducer
  initialState: IState
  children: ReactNode
}

export const StateContext = createContext<[IState, Dispatch<DispatchArgs>]>([is, () => {}])

export const StateProvider = ({ reducer, initialState, children }: IStateProvider) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
