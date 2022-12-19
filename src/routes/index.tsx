import { useEffect } from 'react'
import { Route, useNavigate, Routes, useLocation } from 'react-router-dom'
import { useIsFetching, useIsMutating } from 'react-query'
import { Spin } from 'antd'

import useLoader, { LoaderProvider } from 'context/loader'
import useAlert, { AlertProvider } from 'context/alerts'
import Alerts from 'components/Alerts'
import routes, { IRoute, LandingPage } from 'constants/routes'
import PublicLayout from 'components/Layout/PublicLayout'
import { MetadataProvider } from 'context/metadata'

export const CustomRoute = ({ component: Component, restricted }: IRoute) => {
  const navigate = useNavigate()
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  const { loader, setLoader } = useLoader()
  const {
    alert: { message, show, type },
  } = useAlert()

  useEffect(() => {
    const accessToken = localStorage.getItem('_accessToken')
    if (restricted && !accessToken) navigate(LandingPage.path)
  }, [restricted])

  useEffect(() => {
    if (isFetching || isMutating) setLoader(true)
    else setLoader(false)
  }, [isFetching, isMutating])

  return (
    <>
      {show && <Alerts description={message} type={type} />}
      <Spin size="large" spinning={loader}>
        <PublicLayout>
          <Component />
        </PublicLayout>
      </Spin>
    </>
  )
}

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <MetadataProvider>
      <AlertProvider>
        <LoaderProvider>
          <Routes>
            {routes.map((route, index) => {
              const { component, restricted, path } = route
              return (
                <Route
                  key={index}
                  path={path}
                  element={<CustomRoute path={path} component={component} restricted={restricted} />}
                />

              )
            })}
          </Routes>
        </LoaderProvider>
      </AlertProvider>
    </MetadataProvider>
  )
}

export default AppRoutes
