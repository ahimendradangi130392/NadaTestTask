import { ReactElement } from 'react'
import Home from 'views/LandingPage/Home'
import ItemsDtails from 'views/LandingPage/Home/ItemsDtails'

export interface IRoute {
  component: () => ReactElement
  path: string
  restricted: boolean
}

export const LandingPage: IRoute = {
  component: Home,
  path: '/',
  restricted: false,
}
export const DtailsPage: IRoute = {
  component: ItemsDtails,
  path: '/dtails/:id',
  restricted: false,
}


const IRouteS = [
  LandingPage,
  DtailsPage
]

export default IRouteS
